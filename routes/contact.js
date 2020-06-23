const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

// @Api : http:localhost:5000/api/contacts
// @desc: Add new Contact
// @access: public
router.post("/", async (req, res) => {
  const { name, email, phone } = req.body;
  const newcontact = new Contact({ name, email, phone });
  try {
    const addResult = await newcontact.save();
    res.status(200).json("contact added" + addResult);
  } catch (error) {
    res.status(500).json({ errors: error });
  }
});

// @Api : http:localhost:5000/api/contacts
// @desc: Get All Contacts
// @access: public
router.get("/", async (req, res) => {
  try {
    const getAll = await Contact.find();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json({ errors: error });
  }
});

// @Api : http:localhost:5000/api/contacts/id
// @desc: Get Contact by id
// @access: public
router.get("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const contact = await Contact.findById({ _id });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ errors: error });
  }
});

// @Api : http:localhost:5000/api/contacts/id
// @desc: Delete Contact
// @access: public
router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    await Contact.findOneAndDelete({ _id });
    res.status(200).json("contact deleted");
  } catch (error) {
    res.status(500).json({ errors: error });
  }
});

// @Api : http:localhost:5000/api/contacts/id
// @desc: Edit Contact
// @access: public
router.put("/:_id", async (req, res) => {
  const { _id } = req.params;
  //   const { name, email, phone } = req.body;

  try {
    const updateRes = await Contact.findOneAndUpdate(
      { _id },
      { $set: req.body }
    );
    res.json("contact modifieded");
  } catch (error) {
    res.status(500).json({ errors: error });
  }
});

module.exports = router;

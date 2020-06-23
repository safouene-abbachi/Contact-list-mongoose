import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactCard from "./components/ContactCard";
import {
  getContacts,
  addContact,
  editContact,
} from "./js/actions/actionsContact";

function App() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEdit, setisEdit] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const handelChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setContact({
      name: "",
      email: "",
      phone: "",
      id: "",
    });
  };
  const add = () => {
    dispatch(addContact(contact));
    reset();
  };

  const editUser = () => {
    dispatch(editContact(contact.id, contact));
    reset();
  };

  const getPerson = (person) => {
    setContact({
      name: person.name,
      email: person.email,
      phone: person.phone,
      id: person._id,
    });
    setisEdit(true);
  };

  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Link to="/Contact-list">
          <button className="button">Contact List</button>
        </Link>
        <Link to="/Add-contact">
          <button
            className="button"
            onClick={() => {
              setisEdit(false);
              reset();
            }}
          >
            Add Contact
          </button>
        </Link>
      </div>
      <Route
        path="/Contact-list"
        render={() => (
          <div className="contact-list">
            {contacts.map((el, i) => (
              <ContactCard key={i} contact={el} getPerson={getPerson} />
            ))}
          </div>
        )}
      />
      <Route
        path="/(Add-contact|Edit-Contact)/"
        render={() => (
          <AddContact
            handelChange={handelChange}
            action={isEdit ? editUser : add}
            contact={contact}
            isEdit={isEdit}
          />
        )}
      />
    </BrowserRouter>
  );
}

export default App;

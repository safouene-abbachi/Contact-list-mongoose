import React from "react";
import { Link } from "react-router-dom";

const AddContact = ({ handelChange, action, contact, isEdit }) => {
  return (
    <div className="add-card">
      <p className="card-title-add">
        {isEdit ? "Edit Contact" : "New Contact"}
      </p>

      <input
        name="name"
        type="text"
        placeholder="Name..."
        onChange={handelChange}
        value={contact.name}
      />

      <input
        name="phone"
        type="text"
        placeholder="Phone..."
        onChange={handelChange}
        value={contact.phone}
      />

      <input
        name="email"
        type="text"
        placeholder="Email..."
        onChange={handelChange}
        value={contact.email}
      />

      <Link to="/Contact-list">
        <input
          type="button"
          value={isEdit ? "Edit Contact" : "Add Contact"}
          className="add-button"
          onClick={action}
        />
      </Link>
    </div>
  );
};

export default AddContact;

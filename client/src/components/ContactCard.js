import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../js/actions/actionsContact";

const ContactCard = ({ contact, getPerson }) => {
  const dispatch = useDispatch();

  const deleteuser = () => {
    dispatch(deleteContact(contact._id));
  };
  return (
    <div className="contact-card">
      <p className="card-title">{contact.name}</p>

      <div className="card-text">
        <h4>
          <i class="fas fa-mobile-alt"></i> Phone:
        </h4>
        <p>{contact.phone}</p>
        <h4>
          <i class="fas fa-envelope"></i> Email:
        </h4>
        <p>{contact.email}</p>
      </div>
      <div className="buttons">
        <Link to="/Edit-Contact">
          <input
            type="button"
            value="Edit"
            className="edit-button"
            onClick={() => getPerson(contact)}
          />
        </Link>
        <input
          type="button"
          value="Delete"
          className="edit-button"
          onClick={deleteuser}
        />
      </div>
    </div>
  );
};

export default ContactCard;

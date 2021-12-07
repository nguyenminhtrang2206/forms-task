import React from "react";

const closeHandler = () => {
  window.location.reload();
};

const Popup = ({ firstname, lastname, phonenumber, message, role }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>Your note</h1>

        <p>First name: {firstname}</p>

        <p>Last name: {lastname}</p>

        <p>Phone number: {phonenumber}</p>

        <p>Message: {message}</p>

        <p>Role: {role}</p>

        <div className="popup-buttons">
          <button onClick={closeHandler} className="yes">
            YES, I'M SURE
          </button>
          <button onClick={closeHandler} className="no">
            NOPE, DON'T WANT TO POST IT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

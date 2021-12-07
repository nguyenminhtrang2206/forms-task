import React from "react";

const View = ({ firstname, lastname, phonenumber, message, role }) => {
  return (
    <div className="input-area">
      <div className="input">
        <div className="vl">
          <h1>This is your input</h1>
          <div className="hl"></div>
          <p>First name: {firstname}</p>
          <div className="hl"></div>
          <p>Last name: {lastname}</p>
          <div className="hl"></div>
          <p>Phone number: {phonenumber}</p>
          <div className="hl"></div>
          <p>Message: {message}</p>
          <div className="hl"></div>
          <p>Role: {role}</p>
          <div className="hl"></div>
        </div>
      </div>
    </div>
  );
};

export default View;

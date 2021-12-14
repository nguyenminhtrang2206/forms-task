import React from "react";

const Notes = ({ firstname, lastname, phonenumber, message, role }) => {
  return (
    <div className="note">
      {firstname} {lastname} {phonenumber} {message} {role}
    </div>
  );
};

export default Notes;

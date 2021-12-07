import React from "react";

const Notes = ({ id, firstname, lastname, phonenumber, message, role }) => {
  return (
    <div key={id}>
      {firstname} {lastname} {phonenumber} {message} {role}
    </div>
  );
};

export default Notes;

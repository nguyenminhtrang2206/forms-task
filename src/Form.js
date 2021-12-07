import React from "react";

const Form = ({ change, submit }) => {
  return (
    <form onSubmit={submit}>
      <div className="form">
        <div>
          <label htmlFor="firstname">
            <strong>First name</strong>
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            required
            onChange={change}
          />
        </div>

        <div>
          <label htmlFor="lastname">
            <strong>Last name</strong>
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            required
            onChange={change}
          />
        </div>

        <div>
          <label htmlFor="phonenumber">
            <strong>Phone number</strong>
          </label>
          <input
            type="number"
            name="phonenumber"
            id="phonenumber"
            required
            onChange={change}
          />
        </div>

        <div>
          <label htmlFor="message">
            <strong>Message</strong>
          </label>
          <textarea name="message" id="message" required onChange={change} />
        </div>

        <div>
          <label htmlFor="role">
            <strong>Role</strong>
          </label>
          <select name="role" id="role" required onChange={change}>
            <option value="">Choose</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <input className="submit-button" type="submit" value="SEND" />
    </form>
  );
};

export default Form;

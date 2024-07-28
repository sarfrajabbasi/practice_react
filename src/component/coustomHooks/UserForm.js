// @ts-nocheck
import React, { useState } from "react";
import useInput from "./useInput";

const UserForm = () => {
  const [firstName, bindFirstName,resetFirstName] = useInput('')
  const [lastName, bindLastName,resetLastName] = useInput('')
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName()
    resetLastName()
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          {...bindFirstName}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          {...bindLastName}
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;

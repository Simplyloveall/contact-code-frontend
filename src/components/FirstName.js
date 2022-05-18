import React from "react";

const FirstName = (props) => {
  return (
    <div>
      <h1>This is First Name</h1>
      <label>First Name</label>
      <input
        name="fristName"
        onChange={(e) => props.setFirstName(e.target.value)}
        value={props.firstName}
      />
    </div>
  );
};

export default FirstName;

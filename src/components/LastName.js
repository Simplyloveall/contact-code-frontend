import React from "react";

const LastName = (props) => {
  return (
    <div>
      <h1>This is Last Name</h1>
      <label>Last Name</label>
      <input
        name="lastName"
        onChange={(e) => props.setLastName(e.target.value)}
        value={props.lastName}
      />
    </div>
  );
};

export default LastName;

import React from "react";

const Email = (props) => {
  return (
    <div>
      <h1>This is Email</h1>
      <label>Email</label>
      <input
        name="email"
        onChange={(e) => props.setEmail(e.target.value)}
        value={props.email}
      />
    </div>
  );
};

export default Email;

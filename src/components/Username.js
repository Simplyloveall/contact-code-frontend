import React from "react";

const Username = (props) => {
  return (
    <div>
      <h1>This is Username</h1>
      <label>Username</label>
      <input
        name="username"
        onChange={(e) => props.setUsername(e.target.value)}
        value={props.username}
      />
    </div>
  );
};

export default Username;

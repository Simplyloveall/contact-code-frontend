import React from "react";

const ConfirmPassword = (props) => {
  return (
    <div>
      <h1>This is ConfirmPassword</h1>
      <label>ConfirmPassword</label>
      <input
        name="confirmPassword"
        onChange={(e) => props.setConfirmPassword(e.target.value)}
        value={props.confirmPassword}
      />
    </div>
  );
};

export default ConfirmPassword;

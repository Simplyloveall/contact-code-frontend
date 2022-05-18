import React from "react";

const ContactCode = (props) => {
  return (
    <div>
      <h1>This is ContactCode</h1>
      <label>ContactCode</label>
      <input
        name="contactCode"
        onChange={(e) => props.setContactCode(e.target.value)}
        value={props.contactCode}
        maxlength="10"
        onInput={(e) => (e.target.value = ("" + e.target.value).toUpperCase())}
      />
    </div>
  );
};

export default ContactCode;

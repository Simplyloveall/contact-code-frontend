import React from "react";
import { get } from "../authService/authService";

const ContactCard = (props) => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    get("/users/profile-info")
      .then((results) => {
        console.log(results.data);
        setUser(results.data);
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  }, []);

  return (
    <div>
      <h1>This is {user.firstName}'s Contact Card</h1>
      <p>contact-code: {user.contactCode}</p>
      <img src={user.profilePicture} width="50" />

      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.street}</p>
      <p>{user.city}</p>
      <p>{user.state}</p>
      <p>{user.country}</p>
      <p>{user.primaryChat}</p>

      <p>{user.friends}</p>
    </div>
  );
};

export default ContactCard;

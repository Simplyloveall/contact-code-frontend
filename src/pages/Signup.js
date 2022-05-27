import React from "react";
import ContactCode from "../components/ContactCode";
import FirstName from "../components/FirstName";
import LastName from "../components/LastName";
import Email from "../components/Email";
import Password from "../components/Password";
import ConfirmPassword from "../components/ConfirmPassword";
import { post } from "../authService/authService";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let [contactCode, setContactCode] = React.useState("");
  let [firstName, setFirstName] = React.useState("");
  let [lastName, setLastName] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [confirmPassword, setConfirmPassword] = React.useState("");
  let [errormessage, setErrormessage] = React.useState("");

  const navigate = useNavigate();

  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  function checkError(e) {
    e.preventDefault();
    if (contactCode.length !== 10) {
      setErrormessage("contact-code must be ten characters");
    } else if (password.length < 6) {
      setErrormessage("password must be at least 6 characters");
    } else if (password === "password") {
      setErrormessage("your password can't be 'password'");
    } else if (password !== confirmPassword) {
      setErrormessage("your password didn't match");
    } else if (!regexExp.test(email)) {
      setErrormessage("that is not a valid email address");
    } else {
      setErrormessage(`Welcome ${firstName} ${lastName}!`);
      post("/users/signup", {
        contactCode: contactCode,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      })
        .then((results) => {
          //NOTE: remove console.log()
          console.log("Results", results.data.token);
          localStorage.setItem("authToken", results.data.token);
          navigate("/");
        })
        .catch((err) => {
          //NOTE: remove console.log()
          console.log("Something went wrong", err.response.data.message);
          setErrormessage(err.response.data.message);
        });
    }
  }

  return (
    <div className="container">
      <form onSubmit={checkError}>
        <ContactCode setContactCode={setContactCode} />
        <Email setEmail={setEmail} />
        <Password setPassword={setPassword} />
        <ConfirmPassword setConfirmPassword={setConfirmPassword} />
        <FirstName setFirstName={setFirstName} />
        <LastName setLastName={setLastName} />
        <button>Submit</button>

        <p>{errormessage}</p>
      </form>
    </div>
  );
};

export default Signup;

import React from "react";
import ContactCode from "../components/ContactCode";
import Password from "../components/Password";
import { post } from "../authService/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [contactCode, setContactCode] = React.useState("MaxHameed1");
  let [password, setPassword] = React.useState("password");
  let [errormessage, setErrormessage] = React.useState("");

  const navigate = useNavigate();

  function submitLogin(e) {
    e.preventDefault();
    console.log(contactCode, password);
    if (contactCode.length !== 10) {
      setErrormessage("contact-code must be ten characters");
    } else {
      post("/users/login", {
        contactCode: contactCode,
        password: password,
      })
        .then((results) => {
          console.log("Results", results.data);
          localStorage.setItem("authToken", results.data.token);
          navigate("/");
        })
        .catch((err) => {
          console.log("Something went wrong", err.response.data.message);
          setErrormessage(err.response.data.message);
        });
    }
  }

  return (
    <div className="container">
      <form onSubmit={submitLogin}>
        <h1>Log-in here</h1>
        <ContactCode setContactCode={setContactCode} />
        <Password setPassword={setPassword} />
        <button>Log-in</button>
      </form>
      <p>{errormessage}</p>
    </div>
  );
};

export default Login;

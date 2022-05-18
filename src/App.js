import React from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import DeleteProfile from "./pages/DeleteProfile";

function App() {
  const navigate = useNavigate();

  let token = localStorage.getItem("authToken");
  console.log("TOKEN", token);

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <header>
        {token ? (
          <nav>
            <Link to="/">Home</Link>
            <Link to="/edit-profile">Edit Profile</Link>
            <Link to="/delete-profile">Delete Profile</Link>

            <button onClick={logout}>log out</button>
          </nav>
        ) : (
          <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
          </nav>
        )}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/edit-profile" element={<Profile />} />
        <Route path="/delete-profile" element={<DeleteProfile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
//NOTE: remove LINK if it is no longer being used
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import DeleteProfile from "./pages/DeleteProfile";
import ContactCard from "./components/ContactCard";
import AddFriend from "./pages/AddFriend";
import MessageForm from "./components/MessageForm";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const navigate = useNavigate();

  let token = localStorage.getItem("authToken");

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <Navbar token={token} logout={logout} />

      {/* NOTE: Remove commented out code */}

      {/* <button onClick={logout}>log out</button> */}

      {/* <header>
        {token ? (
          <nav>
            <Link to="/">Home</Link>
            <Link to="/edit-profile">Edit Profile</Link>
            <Link to="/delete-profile">Delete Profile</Link>
            <Link to="/contact-card">My Contact Card</Link>
            <Link to="/add-friend">Add Friend</Link>

            <button onClick={logout}>log out</button>
          </nav>
        ) : (
          <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Log in</Link>
          </nav>
        )}
      </header> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/edit-profile" element={<Profile />} />
        <Route path="/delete-profile" element={<DeleteProfile />} />
        <Route path="/contact-card" element={<ContactCard />} />
        <Route path="/add-friend" element={<AddFriend />} />
        <Route path="/send-message/:userid" element={<MessageForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

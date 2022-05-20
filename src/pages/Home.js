import React from "react";
import { get, post } from "../authService/authService";
import FriendRequestCard from "../components/FriendRequestCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    let token = localStorage.getItem("authToken");
    console.log("This is the toekn", token);
    testLogin();
  }, []);

  function testLogin() {
    get("/users/login-test")
      .then((results) => {
        console.log("Are we logged in", results.data);
        setUser(results.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function acceptFriend(id) {
    console.log("ID", id);
    post(`/users/${id}/accept`)
      .then((results) => {
        // setFriends(results);
        // navigate("/");
        testLogin();
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  }

  function ignoreFriend(id) {
    console.log("ID", id);
    post(`/users/${id}/reject`)
      .then((results) => {
        // navigate("/");
        testLogin();
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  }

  return (
    <div className="container">
      <h1>Connecting made easy</h1>

      <p>New invitations to connect</p>
      <img src={user.friend} />

      {user.friendRequest?.map(function (friend) {
        return (
          <FriendRequestCard
            friend={friend}
            acceptFriend={acceptFriend}
            ignoreFriend={ignoreFriend}
          />
        );
      })}
      <hr />
      <div>
        <p>
          {user.friends?.map(function (friend) {
            return (
              <div>
                <p>Friend's contact-code: {friend.contactCode}</p>
                <img src={friend.profilePicture} width="200" />
                <p> First Name: {friend.firstName}</p>
                <p>Last Name: {friend.lastName}</p>
                <p>Email: {friend.email}</p>
                <p>Phone: {friend.phone}</p>
                <Link to={`/send-message/${friend._id}`}>
                  Send {friend.firstName} a message
                </Link>
                <hr />
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Home;

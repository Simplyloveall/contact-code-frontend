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
    <div>
      <h1>This is Home</h1>
      <textarea placeholder="start writing your message here..."></textarea>
      <br />
      <button>Send</button>

      <p>New invitations to connect</p>
      <img src={user.friend} />

      <p>{user.firstName}</p>
      {user.friendRequest?.map(function (friend) {
        return (
          <FriendRequestCard
            friend={friend}
            acceptFriend={acceptFriend}
            ignoreFriend={ignoreFriend}
          />
        );
      })}

      <div>
        <p>{user.firstName}'s Friends</p>
        <p>
          {user.friends?.map(function (friend) {
            return (
              <div>
                <p>{friend.firstName}</p>
                <p>{friend.lastName}</p>
                <p>{friend.email}</p>
                <p>{friend.phone}</p>
                <Link to={`/send-message/${friend._id}`}>Message</Link>
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Home;

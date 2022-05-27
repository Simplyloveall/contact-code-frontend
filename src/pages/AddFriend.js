import React from "react";
import { get, post } from "../authService/authService";
import { useNavigate } from "react-router-dom";

//NOTE: remove props if you aren't using it

function AddFriend(props) {
  const [code, setCode] = React.useState("");
  const [user, setUser] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    testLogin();
  }, []);

  function testLogin() {
    get("/users/login-test")
      .then((results) => {
        //NOTE: remove console.log()
        console.log("Are we logged in", results.data);
        setUser(results.data);
      })
      .catch((err) => {
        //NOTE: replace this with some kind of setErrorMessage() hook to better explain the issue to the user
        console.log(err.message);
      });
  }

  function sendFriendRequest(e) {
    e.preventDefault();
    post(`/users/${code}/invite`, { code: code })
      .then((results) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendFriendRequest}>
          <label>Add Friend</label>
          <input value={code} onChange={(e) => setCode(e.target.value)} />
          <button type="submit">Add Friend</button>
        </form>
      </div>
      <br />
      <div className="container">
        {user.friends?.map(function (friend) {
          return (
            <div>
              <img src={friend.profilePicture} width="200" />
              <p>{friend.firstName}</p>
              <p>{friend.lastName}</p>
              <p>{friend.email}</p>
              <p>{friend.phone}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddFriend;

import React from "react";
import { post } from "../authService/authService";
import { useNavigate } from "react-router-dom";

function AddFriend(props) {
  const [code, setCode] = React.useState("");

  const navigate = useNavigate();

  function sendFriendRequest(e) {
    e.preventDefault();
    post(`/${props.friend._id}/invite`)
      .then((results) => {
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  }

  return (
    <div>
      <form onSubmit={sendFriendRequest}>
        <label>Add Friend</label>
        <input value={code} onChage={(e) => setCode(e.target.value)} />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}

export default AddFriend;

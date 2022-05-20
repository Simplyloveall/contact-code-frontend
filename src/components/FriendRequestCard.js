import React from "react";
import { post } from "../authService/authService";
import { useNavigate } from "react-router-dom";

const FriendRequestCard = (props) => {
  const [friends, setFriends] = React.useState([]);

  const navigate = useNavigate();

  return (
    <div className="container">
      <div>{props.friend.firstName} wants to connect</div>
      <button onClick={() => props.acceptFriend(props.friend._id)}>
        accept
      </button>
      <button onClick={() => props.ignoreFriend(props.friend._id)}>
        ignore
      </button>
    </div>
  );
};

export default FriendRequestCard;

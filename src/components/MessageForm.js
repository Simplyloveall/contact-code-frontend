import React from "react";
import { post } from "../authService/authService";
import { useParams } from "react-router-dom";

function MessageForm() {
  const [message, setMessage] = React.useState("");

  const params = useParams();

  function sendMessage(e) {
    e.preventDefault();
    post(`/messages/${params.userid}/send`, { message: message })
      .then((results) => {
        console.log(results.data);
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  }

  return (
    <div>
      <h2>send the message</h2>
      <form onSubmit={sendMessage}>
        <label>Type your message here</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default MessageForm;

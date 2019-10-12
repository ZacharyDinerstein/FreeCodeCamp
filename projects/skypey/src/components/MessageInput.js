import React from "react";
import store from "../store";
import { setTypingValue } from "../actions";
import { sendMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ message, userId }) => {

    const handleChange = e => {
      store.dispatch(setTypingValue(e.target.value));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      store.dispatch(sendMessage(message, userId));
    };
  
    return (
      <form className="Message" onSubmit={handleSubmit}>
        <input
          className="Message__input"
          onChange={handleChange}
          value={message}
          placeholder="write a message"
        />
      </form>
    );
  };

export default MessageInput;
import React from "react";
import store from "../store";
import { setTypingValue } from "../actions";
import { sendMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value, userId }) => {

    const handleChange = e => {
      store.dispatch(setTypingValue(e.target.value));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('MESSAGES-INPUT.js');
      console.log('value');
      console.log(value);
      console.log('userId');
      console.log(userId);
      store.dispatch(sendMessage(value, userId));
    };
  
    return (
      <form className="Message" onSubmit={handleSubmit}>
        <input
          className="Message__input"
          onChange={handleChange}
          value={value}
          placeholder="write a message"
        />
      </form>
    );
  };

export default MessageInput;
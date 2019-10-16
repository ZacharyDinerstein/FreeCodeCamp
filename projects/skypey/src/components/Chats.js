import React, { Component } from "react";
import store from "../store";
import { deleteMessage } from "../actions";
import "./Chats.css";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  const [hover, toggleHover] = React.useState(false);

  console.log('message')
  console.log(message)
  
  const handleToggleHover = () => {
    toggleHover(!hover);
  }

  const handleDeleteMessage = () => {
    const messageNum = message.number;
    console.log('messageNum');
    console.log(messageNum);

    store.dispatch(deleteMessage(messageNum));
  }

  return (
    <div 
      className={`Chat${is_user_msg ? " is-user-msg" : ""}${hover ? " hover" : ""}`} 
      onMouseEnter={handleToggleHover} 
      onMouseLeave={handleToggleHover} 
      >
       <span>{text}</span>
       <div className="Chat__delete-btn" onClick={handleDeleteMessage}>x</div>
    </div>
  );
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;
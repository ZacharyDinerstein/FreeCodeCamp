import React from "react";
import store from "../store";
import Header from "../components/Header";
import Chats from "../components/Chats";
import "./ChatWindow.css";

const _ = require("lodash");

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState(),
        activeUser = state.contacts[activeUserId],
        activeMsgs = state.messages[activeUserId];

    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={_.values(activeMsgs)} />
        </div>
    );
};

export default ChatWindow;
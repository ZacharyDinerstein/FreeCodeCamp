import React from "react";
import "./Main.css";
import Empty from "../components/Empty";
import ChatWindow from "../components/ChatWindow";
import store from "./../store";

const Main = ({ user, activeUserId }) => {
    let myStore = store.getState();

    const renderMainContent = () => {
        if (!activeUserId) {
            return <Empty user={user} activeUserId={activeUserId} />;
        } else {
            return <ChatWindow activeUserId={activeUserId} />;
        }
    };

    return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
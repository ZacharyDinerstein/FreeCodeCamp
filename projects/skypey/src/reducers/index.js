import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";
import sendMessage from "./sendMessage";

export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages,
  typing,
  sendMessage
});
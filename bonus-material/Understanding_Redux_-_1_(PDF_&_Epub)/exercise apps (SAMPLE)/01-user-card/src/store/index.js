import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import logger from "redux-logger";

// this is better to write in capitals
export const INITIAL_STATE = {
  name: "Zack Dinerstein",
  location: "Tel Aviv",
  description: "React Developer, Teacher, and occasional Rock Climber",
  likes: "Bluegrass"
};

// not required, but when you go to Console -> you'll love it.
// NB: This should be used only on DEV version
export const store = createStore(
  reducer,
  INITIAL_STATE,
  applyMiddleware(logger)
);

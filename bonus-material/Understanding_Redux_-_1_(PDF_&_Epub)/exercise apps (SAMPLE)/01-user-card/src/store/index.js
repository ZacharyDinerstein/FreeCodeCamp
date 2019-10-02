import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { 
    name: "Zack Dinerstein",
    location: "Tel Aviv",
    description: "React Developer, Teacher, and occasional Rock Climber",
    likes: "Bluegrass",
};

export const store = createStore(reducer, initialState);

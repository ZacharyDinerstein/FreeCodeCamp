import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from './serviceWorker';
import store from "./store";

const fancyLog = () => {
    console.log("Index.js - STATE");
    console.log(store.getState());
}


const render = () => {
    fancyLog();
    return ReactDOM.render(<App />, document.getElementById("root"));
};
render();

store.subscribe(render);
serviceWorker.unregister();


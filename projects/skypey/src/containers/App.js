import React from 'react';
import './App.css';
import Sidebar from './../components/Sidebar';
import Main from './../components/Main';
import store from "./../store";

const _ = require("lodash"),
  {contacts} = store.getState();

function App() {
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;

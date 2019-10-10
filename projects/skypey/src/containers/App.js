import React from 'react';
import './App.css';
import Sidebar from './../components/Sidebar';
import Main from './../components/Main';
import store from "./../store";

const _ = require("lodash"),
  { contacts, user, activeUserId  } = store.getState();


// console.log(contacts)

function App() {
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;

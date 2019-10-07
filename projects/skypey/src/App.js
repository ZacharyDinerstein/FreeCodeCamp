import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import store from "./store";

const {contacts} = store.getState()

function App() {
  return (
    <div className="App">
      <Sidebar contacts={contacts} />
      <Main />
    </div>
  );
}

export default App;

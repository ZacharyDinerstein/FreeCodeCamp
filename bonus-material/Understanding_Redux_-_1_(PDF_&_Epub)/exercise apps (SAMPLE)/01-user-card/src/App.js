import React, { Component } from "react";
import "./App.css";
import { store } from "./store";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";


class App extends Component {
  render() {
    const cardData = store.getState();

    return (
      <div className="App">
        <Card data={cardData} />
        <Form />
      </div>
    );
  }
}

export default App;

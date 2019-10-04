import React, { Component } from "react";
import "./App.css";
import { store } from "./store";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import { updateCardData } from './actions';


class App extends Component {
  render() {
    const cardData = store.getState();

    const handleOnChange = (e) => {
      e.preventDefault();

      const { name, value } = e.target;

      store.dispatch(updateCardData(name, value));
    }

    return (
      <div className="App">
        <Card data={cardData} />
        <Form data={cardData} handleOnChange={handleOnChange} />
      </div>
    );
  }
}

export default App;

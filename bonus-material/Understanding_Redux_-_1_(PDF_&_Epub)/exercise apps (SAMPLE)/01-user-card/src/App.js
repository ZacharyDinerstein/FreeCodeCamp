import React, { Component } from "react";
import "./App.css";
import { store } from "./store";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import { setName } from './actions';


class App extends Component {
  render() {
    const cardData = store.getState();

    const handleOnChange = (e) => {
      e.preventDefault();

      const {value} = e.target;
        
      console.log(e.target.name);
      store.dispatch(setName(value));
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

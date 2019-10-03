import React, { Component } from "react";
import "./App.css";
import { store } from "./store";
import Card from "./components/Card/Card";
import { setName } from './actions';


class App extends Component {
  render() {
    // const cardData = store.getState();

    const changeName = (e) => {
      e.preventDefault();

      const {value} = e.target;
      store.dispatch(setName(value));
    }

      return (
      <div className="App">
        <Card data={store.getState()} />
        <form>
          <label htmlFor="">Name</label>
          <input onChange={changeName} type="text"/>
          {/* <input type="submit" value="Submit"/> */}
        </form>
      </div>
    );
  }
}

export default App;

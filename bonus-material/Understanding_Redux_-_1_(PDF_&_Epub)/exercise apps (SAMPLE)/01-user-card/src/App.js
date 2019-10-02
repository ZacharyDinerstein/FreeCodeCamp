import React, { Component } from "react";
import user from "./images/user.png";
import "./App.css";
import { store } from "./store";

class App extends Component {
  render() {
    const { name, location, description, likes } = store.getState();

    const changeName = (e) => {
      e.preventDefault();

      const {value} = e.target;
      console.log(value);
      
    }

      return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>
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

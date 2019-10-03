import React, { Component } from "react";
// we need the below library for Redux to 'know' how to work with React
// we also importing the store
import { connect } from "react-redux";
import { store } from "./store";
import "./App.css";
import Card from "./components/Card/Card";
import { setName } from "./actions";

class App extends Component {
  render() {
    // const cardData = store.getState();

    const changeName = e => {
      e.preventDefault();

      const { value } = e.target;
      // we are using the mapped action to trigger
      // triggering any actions or getting data directly
      //from the store is not advisable
      this.props.setName(value);
    };

    return (
      <div className='App'>
        <Card data={store.getState()} />
        <form>
          <label htmlFor=''>Name</label>
          {/* we are showing value directly from store */}
          <input onChange={changeName} type='text' value={this.props.name} />
          {/* <input type="submit" value="Submit"/> */}
        </form>
      </div>
    );
  }
}

// to get access to store, you need to map them to props,
// so here we are narrowing which data we need
const mapStateToProps = state => ({ name: state.name });

// connecting component to Redux, as well as adding the action
// we need to be triggered through Redux
export default connect(
  mapStateToProps,
  { setName }
)(App);

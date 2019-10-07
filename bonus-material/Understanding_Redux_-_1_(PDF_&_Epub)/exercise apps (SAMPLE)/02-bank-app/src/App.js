import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import { store } from "./store";
import { updateAmount } from './actions';
import "./App.css";

class App extends Component {
  state = {
    selectValue: 'withdraw'
  }


  handleUpdateAmount = (e) => {
    let { howmuch, emptyaccount } = e.target.dataset,
      { totalAmount } = store.getState(),
      { selectValue } = this.state,
      newAmount;

    if (emptyaccount) {
      store.dispatch(updateAmount(0));
      return
    }

    switch (selectValue) {
      case 'withdraw':
        newAmount = totalAmount - parseInt(howmuch, 10);
        break;
      case 'deposit':
        newAmount = totalAmount + parseInt(howmuch, 10);
        break;
    }
    store.dispatch(updateAmount(newAmount));
  }

  updateSelect = (e) => {
    let { value } = e.target;
    this.setState({ selectValue: value });
  }

  render() {
    const { totalAmount, username } = store.getState();
    let { selectValue } = this.state,
      interactionType = selectValue === 'withdraw' ? 'WITHDRAW' : "DEPOSIT";

    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <select value={selectValue} onChange={this.updateSelect}>
          <option value="withdraw">Withdraw</option>
          <option value="deposit">Deposit</option>
        </select>

        <section className="App__buttons">
          <button data-howmuch="10000" onClick={this.handleUpdateAmount} >
            {interactionType} $10,000
          </button>
          <button data-howmuch="5000" onClick={this.handleUpdateAmount} >
            {interactionType} $5,000
          </button>
        </section>

        <p className="App__giveaway" data-emptyaccount="true" onClick={this.handleUpdateAmount}>
          Give away all your cash to charity
        </p>
      </div>
    );
  }
}

export default App;

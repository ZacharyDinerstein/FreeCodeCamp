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
      newAmount;

    if (emptyaccount) {
      store.dispatch(updateAmount(0));
      return
    }

    console.log(this.state.selectValue)

    switch(this.state.selectValue){
      case 'withdraw':
        newAmount = totalAmount - parseInt(howmuch, 10);
      case 'deposit':
        newAmount = totalAmount + parseInt(howmuch, 10);
    }
    store.dispatch(updateAmount(newAmount));
  }

  updateSelect = (e) => {
    console.log(e.target.value);
    this.setState({selectValue: e.target.value});
  }

  render() {
    const { totalAmount, username } = store.getState();
    let interactionType = this.state.selectValue === 'withdraw' ? 'WITHDRAW' : "DEPOSIT";

    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <select value={this.state.selectValue} onChange={this.updateSelect}>
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

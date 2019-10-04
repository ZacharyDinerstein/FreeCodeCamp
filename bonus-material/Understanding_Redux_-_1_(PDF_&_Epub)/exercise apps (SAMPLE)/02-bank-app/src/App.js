import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";

class App extends Component {
  state = {
    username: "Janny",
    totalAmount: 2500701
  };

  handleWithdrawal = (e) => {
    let { withdrawamount, emptyaccount } = e.target.dataset,
      newAmount = this.state.totalAmount;

    if (emptyaccount) {
      this.setState({
        totalAmount: 0
      })
      return
    }

    newAmount -= parseInt(withdrawamount, 10);
    this.setState({
      totalAmount: newAmount
    })
  }

  render() {
    const { totalAmount, username } = this.state;
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button 
            data-withdrawamount="10000" 
            onClick={this.handleWithdrawal} 
            >
              WITHDRAW $10,000
          </button>
          <button 
            data-withdrawamount="5000" 
            onClick={this.handleWithdrawal} 
            >
              WITHDRAW $5,000
          </button>
        </section>

        <p 
          className="App__giveaway" 
          data-emptyaccount="true" 
          onClick={this.handleWithdrawal}>
            Give away all your cash to charity
        </p>
      </div>
    );
  }
}

export default App;

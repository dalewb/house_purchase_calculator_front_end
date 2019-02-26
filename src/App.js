import React, { Component } from 'react';
import './App.css';
import {fixedMonthlyPayment} from './calculations'
import TestInput from './testInput'

class App extends Component {
  state = {
    income: 0,
    apr: 0,
    downPayment: 0,
    loanTermLength: 0,
    loanAmt: 0,
    taxes: 0,
    rentAmount: 0,
    location: '',
    interestRate: '',
    incomePercentForPayment: 0,
    monthlyPayment: 0,
    remainingBalance: 0,
    futureValue: 0,
    presentValue: 0,
    periodicPayment: 0,
    lengthOfPeriod: 0,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const payment = fixedMonthlyPayment(this.state.loanAmt, this.state.interestRate, this.state.loanTermLength)
    console.log("Submit value",payment);
  }

  render() {
    return (
      <div className="App">
        <h1>House Calculator</h1>
        <TestInput />
        <form onSubmit={this.handleSubmit}>
          <label>
            Income
            <input type="text" name="income" onChange={this.handleChange} />
          </label>
          <label>
            Loan Amount
            <input type="text" name="loanAmt" onChange={this.handleChange} />
          </label>
          <label>
            Interest Rate
            <input type="text" name="interestRate" onChange={this.handleChange} />
          </label>
          <label>
            Loan Term
            <input type="text" name="loanTermLength" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default App;

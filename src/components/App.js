import React, { Component } from 'react';
import TransactionsTable from './TransactionsTable';
import TransactionForm from './TransactionForm';
import TransactionsSummary from './TransactionsSummary';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      transactions: [
        { id: 1, date: '31-12-2016', reason: 'Salary', amount: 1000, type: 'credit' },
        { id: 2, date: '1-1-2017', reason: 'Dividend', amount: 150, type: 'credit' },
        { id: 3, date: '5-1-2017', reason: 'Loan EMI', amount: 300, type: 'debit' },
        { id: 4, date: '7-1-2017', reason: 'Mobile Bill', amount: 100, type: 'debit' }
      ]
    }

    this.deleteTransaction = this.deleteTransaction.bind(this);
    this.debitsAmount = this.debitsAmount.bind(this);
    this.creditsAmount = this.creditsAmount.bind(this);
  }

  deleteTransaction(id){
    if(id !== undefined){
      let transactions = this.state.transactions;
      let index = transactions.indexOf(transactions.filter(function(t){ return t.id === id})[0]);
      transactions.splice(index, 1);
      this.setState({transactions: transactions});
    }
  }

  debitsAmount(){
    if(this.state.transactions.length){
      return this.state.transactions.filter(function(record){
        return record.type === 'debit';
      }).reduce(function(a, b){
        return a + b.amount;
      }, 0);
    } else {
      return 0;
    }
  }

  creditsAmount(){
    if(this.state.transactions.length){
      return this.state.transactions.filter(function(record){
        return record.type === 'credit';
      }).reduce(function(a, b){
        return a + b.amount;
      }, 0);
    } else {
      return 0;
    }
  }

  balanceAmount(){
    return this.creditsAmount() - this.debitsAmount();
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-md-offset-1 col-md-5">
            <div className="well">
              <TransactionsSummary count={this.state.transactions.length} debits={this.debitsAmount()}
              credits={this.creditsAmount()} balance={this.balanceAmount()} />
            </div>
          </div>
          <div className="col-md-5">
            <div className="well">
              <TransactionForm />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className="col-md-offset-1 col-md-10">
            <div className="well">
              <TransactionsTable transactions={this.state.transactions} handleTransactionDelete={this.deleteTransaction} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

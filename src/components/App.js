import React, { Component } from 'react';
import TransactionsTable from './TransactionsTable';
import TransactionForm from './TransactionForm';
import TransactionsSummary from './TransactionsSummary';

class App extends Component {
  constructor(props){
    super(props);
  }

  debitsAmount(){
    if(this.props.transactions.length){
      return this.props.transactions.filter(function(record){
        return record.type === 'debit';
      }).reduce(function(a,b){
        return a.amount + b.amount;
      });
    } else {
      return 0;
    }
  }

  creditsAmount(){
    return this.props.transactions.filter(function(record){
      return record.type === 'credit';
    }).reduce(function(a,b){
      return a.amount + b.amount;
    });
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-md-offset-2 col-md-4">
            <div className="well">
              <TransactionsSummary count={this.props.transactions.length} debits={this.debitsAmount()} credits={this.creditsAmount()}
              balance={this.creditsAmount() - this.debitsAmount()} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="well">
                <TransactionForm />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className="col-md-offset-2 col-md-8">
              <div className="well">
                <TransactionsTable transactions={this.props.transactions}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

App.propTypes = {
  transactions: React.PropTypes.array.isRequired
};

App.defaultProps = {
  transactions: [
    { id: 1, date: '31-12-2016', reason: 'Salary', amount: 1000, type: 'credit' },
    { id: 2, date: '1-1-2017', reason: 'Dividend', amount: 150, type: 'credit' },
    { id: 3, date: '5-1-2017', reason: 'Loan EMI', amount: 300, type: 'debit' },
    { id: 4, date: '7-1-2017', reason: 'Mobile Bill', amount: 100, type: 'debit' }
  ]
};

export default App;

import React, { Component } from 'react';
import TransactionsTable from './TransactionsTable';
import TransactionForm from './TransactionForm';
import TransactionsSummary from './TransactionsSummary';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-md-offset-2 col-md-4">
            <div className="well">
              <TransactionsSummary />
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
              <TransactionsTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

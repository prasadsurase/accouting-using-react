import React, { Component } from 'react';
import TransactionRow from './TransactionRow';

class TransactionsTable extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th> Date </th>
            <th> Reason </th>
            <th> Amount </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          <TransactionRow />
        </tbody>
      </table>
    );
  }
}

export default TransactionsTable;

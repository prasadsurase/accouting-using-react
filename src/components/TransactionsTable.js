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
            <th> Type </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.transactions.map(function(transaction, index){
              return <TransactionRow key={transaction.id} index={index + 1} date={transaction.date} reason={transaction.reason}
                amount={transaction.amount} type={transaction.type} />
            })
          }
        </tbody>
      </table>
    );
  }
}

TransactionsTable.defaultProps = {
  transactions: []
};

export default TransactionsTable;

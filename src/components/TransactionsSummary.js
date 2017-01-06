import React, { Component } from 'react';

class TransactionsSummary extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <span className="badge">999</span>
          Count
        </li>
        <li className="list-group-item">
          <span className="badge">999</span>
          Debits
        </li>
        <li className="list-group-item">
          <span className="badge">999</span>
          Credits
        </li>
        <li className="list-group-item">
          <span className="badge">999</span>
          Balance
        </li>
        <li className="list-group-item">
          <span className="badge">999</span>
          Total
        </li>
      </ul>

    );
  }
}

export default TransactionsSummary;

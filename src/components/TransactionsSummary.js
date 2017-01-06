import React, { Component } from 'react';

class TransactionsSummary extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <span className="badge">{ this.props.count }</span>
          Count
        </li>
        <li className="list-group-item">
          <span className="badge">{ this.props.credits }</span>
          Credits
        </li>
        <li className="list-group-item">
          <span className="badge">{ this.props.debits }</span>
          Debits
        </li>
        <li className="list-group-item">
          <span className="badge">{ this.props.balance }</span>
          Balance
        </li>
      </ul>

    );
  }
}

TransactionsSummary.propTypes = {
  count: React.PropTypes.number.isRequired,
  debits: React.PropTypes.number.isRequired,
  credits: React.PropTypes.number.isRequired,
  balance: React.PropTypes.number.isRequired
}

TransactionsSummary.defaultProps = {
  count: 0,
  debits: 0,
  credits: 0,
  balance: 0
}

export default TransactionsSummary;

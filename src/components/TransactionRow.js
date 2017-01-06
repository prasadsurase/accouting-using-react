import React, { Component } from 'react';

class TransactionRow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <tr>
        <td>{ this.props.date }</td>
        <td>{ this.props.reason }</td>
        <td>{ this.props.amount }</td>
        <td>{ this.props.type }</td>
        <td>
          <button className="btn btn-primary" >Edit</button>
          <button className="btn btn-danger" >Delete</button>
        </td>
      </tr>
    );
  }
}

export default TransactionRow;

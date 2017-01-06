import React, { Component } from 'react';

class TransactionRow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <tr>
        <td>date</td>
        <td>reason</td>
        <td>amount</td>
        <td>
          <button className="btn btn-primary" >Edit</button>
          <button className="btn btn-danger" >Delete</button>
        </td>
      </tr>
    );
  }
}

export default TransactionRow;

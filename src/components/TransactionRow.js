import React, { Component } from 'react';

class TransactionRow extends Component {
  constructor(props){
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(event) {
    event.preventDefault();
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.handleTransactionDelete(this.props.id);
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
          <button className="btn btn-danger" onClick={ this.handleDelete } >Delete</button>
        </td>
      </tr>
    );
  }
}

export default TransactionRow;

import React, { Component } from 'react';

class TransactionForm extends Component {
  constructor(props){
    super(props);
    this.state = { transaction: {id: null, date: '', reason: '', amount: '', type: '' }, editingTransaction: false }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  resetState(){
    let transaction = {id: null, date: '', reason: '', amount: '', type: '' };
    this.setState({transaction: transaction});
  }

  handleChange(event){
    let transaction = this.state.transaction;
    switch(event.target.name){
      case 'date':
        transaction.date = event.target.value;
        break;
      case 'reason':
        transaction.reason = event.target.value;
        break;
      case 'amount':
        transaction.amount = parseInt(event.target.value, 0);
        break;
      case 'type':
        transaction.type = event.target.value;
        break;
      default:
        break;
    }
    this.setState({transaction: transaction});
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.editingTransaction){

    } else {
      this.props.createTransaction(this.state.transaction);
      this.resetState();
    }
  }

  handleCancel(event){
    event.preventDefault();
    this.setState({ editingTransaction: false});
  }

  render(){
    return(
      <form className="form-horizontal">
        <h4>New Record</h4>
        <div className="form-group">
          <label className="col-sm-2 control-label">Date: </label>
          <div className="col-sm-10">
            <input type='text' name='date' className="form-control" value={this.state.transaction.date} onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Reason: </label>
          <div className="col-sm-10">
            <input type='text' name='reason' className="form-control" value={this.state.transaction.reason} onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Amount: </label>
          <div className="col-sm-10">
            <input type='integer' name='amount' className="form-control" value={this.state.transaction.amount} onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Type: </label>
          <div className="col-sm-10">
            <input type='text' name='type' className="form-control" value={this.state.transaction.type} onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-primary" type='submit' onClick={this.handleSubmit} >Submit</button>
            <button className="btn" type='button' >Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}

export default TransactionForm;

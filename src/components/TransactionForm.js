import React, { Component } from 'react';

class TransactionForm extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <form className="form-horizontal">
        <h4>New Record</h4>
        <div className="form-group">
          <label className="col-sm-2 control-label">Date: </label>
          <div className="col-sm-10">
            <input type='text' name='date' className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Reason: </label>
          <div className="col-sm-10">
            <input type='text' name='reason' className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Amount: </label>
          <div className="col-sm-10">
            <input type='integer' name='amount' className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-primary" type='submit'>Submit</button>
            <button className="btn" type='button' >Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}

export default TransactionForm;

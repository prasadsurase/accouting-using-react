import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-md-offset-2 col-md-4">
            <div className="well">
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
            </div>
          </div>
          <div className="col-md-4">
            <div className="well">
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
            </div>
          </div>
        </div>
        <div className='row'>
          <div className="col-md-offset-2 col-md-8">
            <div className="well">
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
                  <tr>
                    <td>date</td>
                    <td>reason</td>
                    <td>amount</td>
                    <td>
                      <button className="btn btn-primary" >Edit</button>
                      <button className="btn btn-danger" >Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link } from 'react-router';

class Confirmation extends Component{
  render(){
    return (
      <div>
        <div className="container confirmation-container">
          <div className="row text-center">
            <div className="col-sm-6 col-sm-offset-3">
              <h1>Success!</h1>
              <i className="ion-checkmark-circled animated fadeIn"></i>
              <h2>{"Thank you for your purchase! You'll also have first access to newly released content. Watch your email for updates!"}</h2>
            </div>
          </div>
          <div className="signup-form row">
            <div className="col-md-4 col-md-offset-4">
              <Link to="/chapters" className="btn btn-lg btn-block btn-primary hvr-hollow">Go to Chapters</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


module.exports = Confirmation;

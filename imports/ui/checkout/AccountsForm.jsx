import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Accounts } from 'meteor/std:accounts-basic';
import Formsy from 'formsy-react';
import Input from '../forms/Input';
import ga from 'react-ga';
ga.initialize(Meteor.settings.public.GA_TRACKING_ID);

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/'
});

import {HOC} from 'formsy-react';

class AccountsForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loginForm: false,
      canSubmit: false,
      formErrors: ''
    };
  }
  enableButton() {
    this.setState({
      canSubmit: true
    });
  }
  disableButton() {
    this.setState({
      canSubmit: false
    });
  }
  toggleForm(e) {
    e.preventDefault();
    this.setState({loginForm: !this.state.loginForm, formErrors: ''});
    document.getElementById('navigation-bar').scrollIntoView();
  }
  createAccount(model) {
    event.preventDefault();
    let self = this;
    const email = model.email;
    const password = model.password;
    Accounts.createUser({
        email: email,
        password: password
    }, function(error, result) {
      if (error) {
        self.setState({formErrors: error.reason})
      }
      else {
        ga.event({
          category: 'User',
          action: 'Created an Account'
        });
      }
    });
  }
  login(model) {
    event.preventDefault();
    let self = this;
    const email = model.email;
    const password = model.password;
    Meteor.loginWithPassword(
        email,
        password,
      function(error) {
      if (error) {
        self.setState({formErrors: error.reason})
      }
    });
  }
  render(){
    if (this.state.loginForm) {
      return (
        <div className='login-form'>
          <h1>Sign In</h1>
          {this.state.formErrors ?
          <div className="alert alert-danger" role="alert">
            <span className="sr-only">Error:</span>
            {this.state.formErrors}
          </div>
          :
          null }
          <Formsy.Form onValidSubmit={this.login.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
              <Input type='email' className='input-lg' name="email" placeholder='Email' required/>
              <Input type='password' className='input-lg' name="password" placeholder='Password' required/>
            <button type="submit" className="btn btn-lg btn-block btn-primary" disabled={!this.state.canSubmit}>Sign In</button>
            <div className="other-form-link">
              <a href='' onClick={this.toggleForm.bind(this)}>Create an Account</a>
            </div>
          </Formsy.Form>
        </div>
      );
    }
    return (
      <div className='create-account-form'>
        <h1>Enter your email and choose a password to create an account</h1>
        {this.state.formErrors ?
        <div className="alert alert-danger" role="alert">
          <span className="sr-only">Error:</span>
          {this.state.formErrors}
        </div>
        :
        null }
        <Formsy.Form onValidSubmit={this.createAccount.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
            <Input type='email' className='input-lg' name="email" validations="isEmail" validationError="This is not a valid email" placeholder='Email' required/>
            <Input type='password' className='input-lg' name="password" validations="minLength:6" validationError="Passwords must be at least 6 characters" placeholder='Password' required/>
          <button type="submit" className="btn btn-lg btn-block btn-primary" disabled={!this.state.canSubmit}>Create Account</button>
          <div className="other-form-link">
            <a href='' onClick={this.toggleForm.bind(this)}>Already have an acount?</a>
          </div>
        </Formsy.Form>
      </div>
    );
  }
};

module.exports = AccountsForm;

import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { IndexLink, Link, browserHistory } from 'react-router';
import MediaQuery from 'react-responsive';
import { createContainer } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/std:accounts-basic';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/',
});

class Navigation extends Component{

  closeMenu() {
    this.props.closeMenu();
  }

  toggleMenu() {
    this.props.toggleMenu();
  }

  logout(e) {
    e.preventDefault();
    Meteor.logout(function() {
      browserHistory.push('/');
    });
  }

  checkSubscribed() {
    if (Roles.userIsInRole(Meteor.userId(), 'subscribed')) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <header id="navigation-bar" className="navigation-bar">
          <IndexLink to="/" id="title">Build<span className="line">|</span>React<span className="line">|</span>Native</IndexLink>
           <MediaQuery query='(max-width: 768px)'>
            <div onClick={this.toggleMenu.bind(this)} className="hamburger-container">
              <span className="hamburger"></span>
            </div>
          </MediaQuery>
          <MediaQuery query='(min-width: 769px)'>
          <ul className="nav navbar-nav navbar-right">
            { !Meteor.user() ?
            <li className="dropdown">
              <Link to='/login' className="dropdown-toggle">Login</Link>
            </li>
            :
            <li className="dropdown">
              <a href='' onClick={this.logout.bind(this)} className="dropdown-toggle">Logout</a>
            </li>
            }
            {this.checkSubscribed() ?
              null
              :
              <li className="dropdown">
                <Link to='/get-the-book' className="dropdown-toggle">Get the Book</Link>
              </li>
            }
            {/*
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{ !! this.props.currentUser ? 'Account' : 'Register / Login' }<span className="caret"></span></a>
              <ul className="dropdown-menu" style={{width: 450}}>
              <Accounts.ui.LoginForm />
              </ul>
            </li>
            */}
            <li className="dropdown">
              <Link to='/chapters' className="dropdown-toggle">Browse Chapters</Link>
            </li>
          </ul>
          </MediaQuery>
        </header>
      </div>
    );
  }
};


export default Navigation;

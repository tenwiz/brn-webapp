import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ga from 'react-ga';
import {Link} from 'react-router';
import fetch from 'node-fetch';
import Modal from './Modal';
import Footer from './Footer';

import { Meteor } from 'meteor/meteor';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      email: '',
      errorMessage: '',
      buttonDisabled: true
    };
  }

  openModal(){
    this.setState({showModal: true});
  }

  handleChange (e) {
    this.setState({email: e.target.value}, function () {
      if (this.state.email) {
        this.setState({buttonDisabled: false})
      }
      else {
        this.setState({buttonDisabled: true})
      }
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    Meteor.call('mcSubscribe', this.state.email, function (error, result) {
      if (error) {
          console.log('There was an error');
      }
      else {
        console.log(result);
      }
    });
    ga.event({
      category: 'Submit Email',
      action: 'click'
    });
    this.setState({email: '', buttonDisabled: true})
    this.openModal();
  }

  componentDidMount () {
    ga.pageview('/');
  }
  render() {
    return (
      <div>
        {this.state.showModal ? <Modal closeModal={() => this.setState({showModal: false}) } /> : null}
        <div className='homepage-hero'>
          <div className='homepage-pattern container'>
            <div className='col-sm-6 col-sm-offset-3'>
              <h1>The React Native guide you've been waiting for.</h1>
              <h2>Learn to build incredible iOS and Android apps in Javascript.</h2>
              <div className='col-xs-12 col-sm-6 col-sm-offset-3'>
                <Link to='/get-the-book' className='btn btn-lg btn-block'>get the book</Link>
                <span className='browse-cta'>or <Link to='/chapters'>Browse Chapters</Link></span>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
            <div className='homepage-section feature-descriptions'>
              <h3>What You'll Learn</h3>
              <div className='row'>
                <div className='col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0'><div className='feature-callout'><i className='icon ion-navicon-round'></i><h4>Navigation and Routing</h4><h5>Create a smooth and intuitive browsing experience</h5></div></div>
                <div className='col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0'><div className='feature-callout'><i className='icon ion-person-stalker'></i><h4>User Accounts</h4><h5>Handle account creation and login management</h5></div></div>
                <div className='col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0'><div className='feature-callout'><i className='icon ion-ios-location'></i><h4>Mapping & Geolocation</h4><h5>Display addresses on a map and utilize the phone's location</h5></div></div>
              </div>
              <div className='row'>
                <div className='col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0'><div className='feature-callout'><i className='icon ion-load-a'></i><h4>API Integration</h4><h5>Fetch and post data to REST APIs</h5></div></div>
                <div className='col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0'><div className='feature-callout'><i className='icon ion-ios-bell'></i><h4>Push Notifications</h4><h5>Keep your users up to date</h5></div></div>
                <div className='col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0'><div className='feature-callout'><i className='icon ion-paintbrush'></i><h4>Animation</h4><h5>Add suprise and delight with native animations and transitions</h5></div></div>
              </div>
            </div>
            <div className='what-youll-build homepage-section'>
              <h3>What You'll Build</h3>
              <div className='row'>
                <div className='col-xs-12 col-sm-8 col-sm-offset-2'>
                  <img src='/images/iphone-homepage.png' />
                  <h4>We'll build an app called <strong>Asemblies</strong>, a robust Meetup clone that incorporates groups, events, and messaging</h4>
                </div>
              </div>
            </div>
            <div className='homepage-section'>
              <h3>About the Authors</h3>
              <div className='row'>
                <div className='author-container'>
                  <img className='tom' src='/images/tom.png' />
                  <h4><strong>Tom Goldenberg</strong> is a mobile and web engineer in New York, NY</h4>
                </div>
                <div className='author-container'>
                  <img src='/images/nick.png' />
                  <h4><strong>Nicholas Alan Brown</strong> is a product manager, designer, and developer in Brooklyn, NY</h4>
                </div>
              </div>
            </div>
            <div className='homepage-section bottom-cta'>
              <h3>Start building incredible apps now.</h3>
              <Link to='/get-the-book' className='btn btn-primary btn-lg btn-block'>get the book</Link>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

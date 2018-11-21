import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import CheckoutForm from './CheckoutForm.jsx';
import Footer from '../Footer';
import AccountsForm from './AccountsForm.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Pricing extends Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    };
  }
  startCheckout(){
    browserHistory.push('/checkout')
  }
  _renderAccountModal(){
    return (
      <AccountsForm {...this.props}/>
    )
  }
  _renderCheckoutForm(){
    return (
      <CheckoutForm {...this.props} />
    )
  }
  _renderModal(){
    return (
      <div className="modal-container">
        <div className="modal-backdrop">
          <ReactCSSTransitionGroup transitionName="modal" transitionAppear={true} transitionAppearTimeout={0} transitionEnterTimeout={0} transitionLeaveTimeout={0}>
          { !! this.props.currentUser ? <CheckoutForm closeModal={() => this.setState({showModal: false}) } /> : <AccountsForm closeModal={() => this.setState({showModal: false}) } />}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
  render(){
    return (
      <div>
        <div className="get-book-container">
          <div className="container">
            <h1><span className="heading-prefix">Get your copy of </span><em>Build React Native</em></h1>
          </div>
          <div className="whats-included-container">
            <div className="container-fluid">
              <h3>{"What's Included"}</h3>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                  <div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0"><div className="included-callout"><i className="icon ion-ios-list"></i><h4>13 Chapters</h4><h5>We walk you through building a complex app step-by-step</h5></div></div>
                  <div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0"><div className="included-callout"><i className="icon ion-code-download"></i><h4>Complete Code</h4><h5>Easily follow along with commits and comments at major milestones</h5></div></div>
                  <div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0"><div className="included-callout"><i className="icon ion-paintbucket"></i><h4>App Design Tips & Tricks</h4><h5>Lean user experience and design best practices as you code</h5></div></div>
                </div>
              </div>
              <h3>Order now and get it for $25 (17% off)</h3>
              <Link to="/checkout" className="btn btn-lg btn-primary hvr-hollow" type="submit">Buy now</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

module.exports = Pricing;

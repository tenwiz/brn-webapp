import React, { Component } from 'react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import StripeCheckout from 'react-stripe-checkout';
import ga from 'react-ga';
ga.initialize(Meteor.settings.public.GA_TRACKING_ID);
ga.plugin.require('ecommerce');

class CheckoutForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      error: '',
      card: {
        number: '',
        cvc: '',
        exp_month: '',
        exp_year: ''
      }
    }
  }
  _handleClick(e) {
    e.preventDefault();
    this.props.closeModal();
  }
  componentDidMount() {
    Stripe.setPublishableKey(Meteor.settings.public.STRIPE_PUBLIC_KEY); // set your test public key
  }
  onToken(token){
    console.log('GOT TOKEN', token);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({loading: true});
    Stripe.createToken(this.state.card, (status, response) => {
      if (status == 402) {
        this.setState({loading: false, error: response.error.message})
      } else if (status == 200) {
        console.log( status, response );
        let metadata = {email: Meteor.user().emails[0].address, userId: Meteor.userId()}
        console.log('METADATA ', metadata);
        let options = {
          user: this.props.currentUser,
          token: response.id,
          metadata: metadata
        };
        Meteor.call('chargeCard', options, (err, res) => {
          if (err) {
            console.log('ERR: ', err);
            this.setState({error: err});
          } else {
            console.log('RES', res);
            if (res.status == 'succeeded') {
              console.log(res.id);
              ga.plugin.execute('ecommerce', 'addTransaction', {
                id: res.id,
                revenue: '25.00'
              });
              ga.plugin.execute('ecommerce', 'send');
              ga.event({
                category: 'User',
                action: 'Purchased Book',
                opt_value: 25
              });
              Meteor.call('updateAccount', this.props.currentUser._id, (err, res) => {
                if (err) { console.log('ERR:', err);}
                else {
                  console.log('UPDATED USER', this.props.currentUser);
                }
              })
              Meteor.call('listSubscribe', Meteor.settings.public.MAILCHIMP_USERS_LIST_ID, this.props.currentUser.emails[0].address);
              this.props.changeTab();
              document.getElementById('navigation-bar').scrollIntoView()
            }
          }
        })
      }
    });
  }
  handleChange(e) {
    let card = this.state.card;
    card[e.target.name] = e.target.value
    this.setState(card);
  }
  render(){
    return (
      <div className='container'>
        <form className='form-group purchase-form' onSubmit={ this.handleSubmit.bind(this) }>
          <h1>Lifetime access to <em>Build React Native</em></h1>
          <h2>
            Enter your card details below <br></br>to complete your purchase
          </h2>
          <img className='payment-icon' src='/images/visa.png' />
          <img className='payment-icon'  src='/images/mc.png' />
          <img className='payment-icon'  src='/images/amex.png' />
          {this.state.error ?
          <div className="alert alert-danger" role="alert">
            <span className="sr-only">Error:</span>
            {this.state.error}
          </div>
          :
          null}
          <input placeholder='Card number' className='input input-lg form-control' size='20' name='number' onChange={this.handleChange.bind(this)} type='password'/>
          <br />
          <div className='form-group'>
            <input placeholder='MM' className='input input-lg form-control' size='2' name='exp_month' onChange={this.handleChange.bind(this)} />
            <input placeholder='YY' className='input input-lg form-control' size='4' name='exp_year' onChange={this.handleChange.bind(this)} />
            <input placeholder='CVC' className='input input-lg form-control' size='4' name='cvc' onChange={this.handleChange.bind(this)} />
          </div>
          <br />
          <button className='btn btn-lg btn-block btn-primary hvr-hollow' type='submit' id="#payment-button">
          {this.state.loading ?
            'Processing...'
            :
            <div>
              <i className="ion-locked"></i>Pay $25
            </div>
            }
            </button>
          <a href='http://www.stripe.com/' target='_blank'><img src='/images/stripe.png' /></a>
      </form>
    </div>
    );
  }
};

let styles = {
  form: {
    width: 350,
  },
  formGroup: {
    display: 'flex',
  }
}

module.exports = CheckoutForm;

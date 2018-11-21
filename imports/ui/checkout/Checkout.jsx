import React, { Component } from 'react';
import CheckoutForm from './CheckoutForm.jsx';
import AccountsForm from './AccountsForm.jsx';
import Confirmation from './Confirmation.jsx';
import Steps from '../third_party/react-steps/index.jsx';
import ga from 'react-ga';
ga.initialize(Meteor.settings.public.GA_TRACKING_ID);

class Checkout extends Component{
  constructor(props){
    super(props);
    this.state = {
      progress: [
        {
          'text'      : 'Account',
          'isDone'    : ! this.props.currentUser,
        },
        {
          'text'      : 'Payment',
          'isDone'    : !! this.props.currentUser
        },
        {
          'text'      : 'Confirmation',
          'isDone'    : false
        },
      ],
      tab: !! this.props.currentUser ? 1 : 0,
    }
  }
  componentWillReceiveProps(nextProps){
    if (!! nextProps.currentUser == !! this.props.currentUser) { return; }
    if (! nextProps.currentUser) {
      let {progress} = this.state;
      progress[0].isDone = true;
      progress[1].isDone = false;
      this.setState({tab: 0, progress: progress})
    } else if (!! nextProps.currentUser){
      let {progress} = this.state;
      progress[0].isDone = false;
      progress[1].isDone = true;
      this.setState({tab: 1, progress: progress})
    }
  }
  _renderTabZero(){
    ga.set({ page: '/create-account' });
    ga.pageview('/create-account');
    return (
          <AccountsForm
            {...this.props}
            changeTab={() => {
              let {progress} = this.state;
              progress[0].isDone = false;
              progress[1].isDone = true;
              this.setState({tab: 1, progress: progress})
            }}
          />
    )
  }
  _renderTabOne(){
    ga.set({ page: '/payment-form'});
    ga.pageview('/payment-form');
    return (
      <CheckoutForm
        {...this.props}
        changeTab={() => {
          let {progress} = this.state;
          progress[1].isDone = false;
          progress[2].isDone = true;
          this.setState({tab: 2, progress: progress})
        }}
      />
    )
  }
  _renderTabTwo(){
    ga.set({ page: '/confirmation' });
    ga.pageview('/confirmation');
    return <Confirmation />;
  }
  _renderTab(){
    let tab;
    switch(this.state.tab){
      case 0:
        tab = this._renderTabZero();
        break;
      case 1:
        tab = this._renderTabOne();
        break;
      case 2:
        tab = this._renderTabTwo();
        break;
    }
    return <div style={{display: 'flex', justifyContent: 'center', height: '90%'}}>{tab}</div>
  }
  componentDidMount() {
    document.getElementById('navigation-bar').scrollIntoView();
  }
  render(){
    return (
      <div>
        <div style={{marginLeft: '10%', marginRight: '10%', marginTop: 20, marginBottom: 20}}>
          <Steps
            items={this.state.progress}
            type='point'
            flat={true}
            changeProgress={() => { console.log('CHANGE PROGRESS')}}
            changeTab={() => { console.log('CHANGE TAB')}}
          />
        </div>
        {this._renderTab()}
      </div>
    );
  }
};

module.exports = Checkout;

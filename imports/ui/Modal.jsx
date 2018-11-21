import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Meteor } from 'meteor/meteor';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _handleClick(e) {
    e.stopPropagation();
    this.props.closeModal();
  }

  render() {
    return (
      <div className="modal-container">
        <div className="modal-backdrop">
          <ReactCSSTransitionGroup transitionName="modal" transitionAppear={true} transitionAppearTimeout={0} transitionEnterTimeout={0} transitionLeaveTimeout={0}>
          <div className="modal-background">
            <h3>Thanks for signing up!</h3>
            <h4>We’re just putting the finishing touches on Build React Native - we’ll let you know when it’s ready.</h4>
            <a href="" className="btn btn-lg btn-default" onClick={this._handleClick.bind(this)}>close</a>
          </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

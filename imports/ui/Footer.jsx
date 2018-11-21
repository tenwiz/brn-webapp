import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="row">
        <div className="chapter-footer">
          &copy; 2016, Tom Goldenberg and Nicholas Alan Brown
        </div>
      </div>
    );
  }
}

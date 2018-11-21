import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class ChapterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="row">
        <div className=" chapter-container col-md-8 col-md-offset-2">
          {this.props.children}
        </div>
      </div>
    );
  }
}

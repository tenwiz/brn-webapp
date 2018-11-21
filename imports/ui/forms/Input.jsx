import React, { Component } from 'react';
import {HOC} from 'formsy-react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: false
    };
  }
  blur () {
    if (this.props.getErrorMessage()) {
      this.setState({showErrors: true});
    }
    else {
      this.setState({showErrors: false});
    }
  }
  render() {
    const className = this.props.showRequired() ? 'required' : this.props.showError() ? 'error' : null;
    const errorMessage = this.props.getErrorMessage();
    let errorClass;
    this.state.showErrors ?
      errorClass = 'form-control-label form-error'
      :
      errorClass = 'no-display';
    return (
      <div className="form-group">
        <label className={errorClass}>{errorMessage}</label>
        <input type={this.props.type} className={'form-control '+this.props.className} placeholder={this.props.placeholder} value={this.props.getValue()} onBlur={this.blur.bind(this)} onChange={(e) => this.props.setValue(e.target.value)} />
      </div>
    );
  }
};

module.exports = HOC(Input);

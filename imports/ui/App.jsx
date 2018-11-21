import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Menu from './Menu';
import Navigation from './Navigation';
import { createContainer } from 'meteor/react-meteor-data';
import Homepage from './Homepage';
import Modal from './Modal';

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      menuOpen: false
    };
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  openModal(){
    this.setState({showModal: true});
  }

  closeMenu (e) {
    this.setState({menuOpen: false});
  }

  render() {
    return (
      <div>
        <div>
          <Menu closeMenu={this.closeMenu.bind(this)} ref="right" alignment="right" visible={this.state.menuOpen} />
          <Navigation {...this.props} closeMenu={this.closeMenu.bind(this)} toggleMenu={this.toggleMenu.bind(this)} />
        </div>
          {this.state.showModal ? <Modal closeModal={() => this.setState({showModal: false}) } /> : <div></div>}
          { React.cloneElement(this.props.children, {
            ...this.props
          })}
      </div>
    );
  }
}


export default App = createContainer(( { params }) => {
  return {currentUser: Meteor.user()};
}, AppContent);

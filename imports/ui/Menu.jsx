import { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import BodyClassName  from 'react-body-classname';

export default class Menu extends Component {

  closeMenu() {
    this.props.closeMenu();
  }

  render() {
    let bodyNoScroll;
    if (this.props.visible) {
      bodyNoScroll = <BodyClassName className='body-no-scroll' />
    }
    return (
      <div>
        <div onClick={this.closeMenu.bind(this)} className={(this.props.visible ? 'overlay-visible ' : '') + 'menu-overlay'}></div>
        <div className='menu'>
          {bodyNoScroll}
          <div className={(this.props.visible ? 'visible ' : '') + this.props.alignment}>{this.props.children}
            <IndexLink to='/' onClick={this.props.closeMenu} className='menu-item'>Home</IndexLink>
            <Link to='/get-the-book' onClick={this.props.closeMenu} className='menu-item'>Get the Book</Link>
            <Link to='/chapters' onClick={this.props.closeMenu} className='menu-item'>Browse Chapters</Link>
          </div>
        </div>
      </div>
    );
  }
};

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import Footer from './Footer';
import chapterData from './content/chapterData';

export default class ChapterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let chapterLinks =
      chapterData.map(function(chapter, index) {
        if (!chapter.subscriberChapter) {
          return <Link key={index} to={chapter.path}><li>{chapter.title}</li></Link>
        } else if (chapter.unfinishedChapter) {
          return <li key={index} className='inactive'>{chapter.title}: COMING SOON</li>
        } else {
          if (Roles.userIsInRole(Meteor.userId(), 'subscribed')) {
            return <Link key={index} to={chapter.path}><li>{chapter.title}</li></Link>
          } else {
            return <li key={index} className='inactive'>{chapter.title}</li>
          }
        }
      })
    return (
      <div>
        <div className="chapter-hero">
          <div className="container">
            <div className="col-md-8 col-md-offset-2">
              <h1>Table of Contents</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="chapter-list col-md-8 col-md-offset-2">
            <ol>
              {chapterLinks}
            </ol>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

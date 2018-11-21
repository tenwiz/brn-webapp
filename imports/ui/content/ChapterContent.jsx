import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import ChapterContainer from './ChapterContainer';
import Footer from '../Footer';
import markdownIt from 'markdown-it';
import Highlight from 'react-highlight';
import Helmet from 'react-helmet';

export default class ChapterContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  componentDidMount(){
    Meteor.call('getMarkdown', this.props.contentPath, (err, res) =>  {
      if (err) { console.log('ERR: ', err); }
      else {
        this.setState({content: res})
      }
    })
  }
  rawMarkup(str){
    let md = new markdownIt();
    let rawMarkup = md.render(str);
    return rawMarkup;
  }

  render() {
    if (this.state.content) {
      return (
        <div>
          <Helmet
              htmlAttributes={{'lang': 'en', 'amp': undefined}}
              title={this.props.title}
              meta={[
                  {'name': 'description', 'content': this.props.description},
                  {'property': 'og:type', 'content': 'article'}
              ]}
          />
          <div className="chapter-hero">
            <div className="container">
              <div className="col-md-8 col-md-offset-2">
                <h1>{this.props.title}</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <ChapterContainer>
              <Highlight innerHTML={true}>
                {this.rawMarkup(this.state.content)}
              </Highlight>
              <div className="chapter-row">
              {this.props.previousChapter ?
                <Link className="chapter-link-left" to={this.props.previousChapter.path}>&lt; {this.props.previousChapter.title}</Link>
                :
                ''
              }
              {this.props.nextChapter ?
                <Link className="chapter-link-right" to={this.props.nextChapter.path}>{this.props.nextChapter.title} &gt;</Link>
                :
                ''
              }
              </div>
            </ChapterContainer>
          </div>
          <Footer />
        </div>
      );
    }
    else {
      return <div></div>
    }
  }
}


ChapterContent.propTypes = {
  title: React.PropTypes.string.isRequired,
  contentPath: React.PropTypes.string.isRequired,
  nextChapter: React.PropTypes.object,
  previousChapter: React.PropTypes.object
};

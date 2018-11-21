import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ga from 'react-ga';
ga.initialize(Meteor.settings.public.GA_TRACKING_ID);
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../../ui/App.jsx';
import Homepage from '../../ui/Homepage.jsx';
import ChapterList from '../../ui/ChapterList.jsx';
import chapterData from '../../ui/content/chapterData.js';
import ChapterContent from '../../ui/content/ChapterContent.jsx';
import Login from '../../ui/Login.jsx';
import Pricing from '../../ui/checkout/Pricing.jsx';
import Checkout from '../../ui/checkout/Checkout.jsx';

export default class ChapterRoute0 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[0].title}
        description={chapterData[0].description}
        contentPath={chapterData[0].contentPath}
        nextChapter={{
          title: chapterData[1].title,
          path: chapterData[1].path
        }}
      />
    );
  }
}

export default class ChapterRoute1 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[1].title}
        description={chapterData[1].description}
        contentPath={chapterData[1].contentPath}
        previousChapter={{
          title: chapterData[0].title,
          path: chapterData[0].path
        }}
        nextChapter={{
          title: chapterData[2].title,
          path: chapterData[2].path
        }}
      />
    );
  }
}

export default class ChapterRoute2 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[2].title}
        description={chapterData[2].description}
        contentPath={chapterData[2].contentPath}
        previousChapter={{
          title: chapterData[1].title,
          path: chapterData[1].path
        }}
        nextChapter={{
          title: chapterData[3].title,
          path: chapterData[3].path
        }}
      />
    );
  }
}

export default class ChapterRoute3 extends Component {
  render() {
    let isSubscriber = Roles.userIsInRole(Meteor.userId(), 'subscribed');
    let buyTheBook = {
      title: 'Pre-order the Full Guide',
      path: '/get-the-book'
    };
    let subscribedLink = {
      title: chapterData[4].title,
      path: chapterData[4].path
    };
    return (
      <ChapterContent
        title={chapterData[3].title}
        description={chapterData[3].description}
        contentPath={chapterData[3].contentPath}
        previousChapter={{
          title: chapterData[2].title,
          path: chapterData[2].path
        }}
        nextChapter={isSubscriber ? subscribedLink : buyTheBook}
      />
    );
  }
}

export default class ChapterRoute4 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[4].title}
        contentPath={chapterData[4].contentPath}
        previousChapter={{
          title: chapterData[3].title,
          path: chapterData[3].path
        }}
        nextChapter={{
          title: chapterData[5].title,
          path: chapterData[5].path
        }}
      />
    );
  }
}

export default class ChapterRoute5 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[5].title}
        contentPath={chapterData[5].contentPath}
        previousChapter={{
          title: chapterData[4].title,
          path: chapterData[4].path
        }}
        nextChapter={{
          title: chapterData[6].title,
          path: chapterData[6].path
        }}
      />
    );
  }
}

export default class ChapterRoute6 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[6].title}
        contentPath={chapterData[6].contentPath}
        previousChapter={{
          ...chapterData[5]
        }}
        nextChapter={{
          ...chapterData[7]
        }}
      />
    );
  }
}
export default class ChapterRoute7 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[7].title}
        contentPath={chapterData[7].contentPath}
        previousChapter={{
          ...chapterData[6]
        }}
        nextChapter={{
          ...chapterData[8]
        }}
      />
    );
  }
}
export default class ChapterRoute8 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[8].title}
        contentPath={chapterData[8].contentPath}
        previousChapter={{
          ...chapterData[7]
        }}
        nextChapter={{
          ...chapterData[9]
        }}
      />
    );
  }
}
export default class ChapterRoute9 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[9].title}
        contentPath={chapterData[9].contentPath}
        previousChapter={{
          ...chapterData[8]
        }}
        nextChapter={{
          ...chapterData[10]
        }}
      />
    );
  }
}
export default class ChapterRoute10 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[10].title}
        contentPath={chapterData[10].contentPath}
        previousChapter={{
          ...chapterData[9]
        }}
        nextChapter={{
          ...chapterData[11]
        }}
      />
    );
  }
}
export default class ChapterRoute11 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[11].title}
        contentPath={chapterData[11].contentPath}
        previousChapter={{
          ...chapterData[10]
        }}
        nextChapter={{
          ...chapterData[12]
        }}
      />
    );
  }
}
export default class ChapterRoute12 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[12].title}
        contentPath={chapterData[12].contentPath}
        previousChapter={{
          ...chapterData[11]
        }}
      />
    );
  }
}
export default class ChapterRoute13 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[13].title}
        contentPath={chapterData[13].contentPath}
        previousChapter={{
          ...chapterData[12]
        }}
        nextChapter={{
          ...chapterData[14]
        }}
      />
    );
  }
}
export default class ChapterRoute14 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[14].title}
        contentPath={chapterData[14].contentPath}
        previousChapter={{
          ...chapterData[13]
        }}

      />
    );
  }
}
export default class ChapterRoute15 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[15].title}
        contentPath={chapterData[15].contentPath}
        previousChapter={{
          ...chapterData[14]
        }}

      />
    );
  }
}
export default class ChapterRoute16 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[16].title}
        contentPath={chapterData[16].contentPath}
        previousChapter={{
          ...chapterData[15]
        }}

      />
    );
  }
}
export default class ChapterRoute17 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[17].title}
        contentPath={chapterData[17].contentPath}
        previousChapter={{
          ...chapterData[16]
        }}

      />
    );
  }
}
export default class ChapterRoute18 extends Component {
  render() {
    return (
      <ChapterContent
        title={chapterData[18].title}
        contentPath={chapterData[18].contentPath}
      />
    );
  }
}

let scrollAndTrack = function () {
  document.getElementById('navigation-bar').scrollIntoView();
  ga.set({ page: window.location.pathname });
  ga.pageview(window.location.pathname);
}

requireAuth = function(nextState, replaceState){
  if (! Meteor.loggingIn() && ! Roles.userIsInRole(Meteor.userId(), 'subscribed')){
    replaceState({ pathname: '/get-the-book', state: { nextPath: nextState.location.pathname }})
  }
}

Meteor.startup( () => {
  render(
    <Router onUpdate={() => scrollAndTrack()} history={browserHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={ Homepage } />
        <Route path="/login" component={ Login } />
        <Route path="/chapters" component={ ChapterList } />
        <Route path="/get-the-book" component={ Pricing } />
        <Route path="/checkout" component={ Checkout } />
        <Route path={chapterData[0].path} component={ ChapterRoute0 } />
        <Route path={chapterData[1].path} component={ ChapterRoute1 } />
        <Route path={chapterData[2].path} component={ ChapterRoute2 } />
        <Route path={chapterData[3].path} component={ ChapterRoute3 } />
        <Route path={chapterData[4].path} component={ ChapterRoute4 } onEnter={requireAuth}/>
        <Route path={chapterData[5].path} component={ ChapterRoute5 } onEnter={requireAuth}/>
        <Route path={chapterData[6].path} component={ ChapterRoute6 } onEnter={requireAuth}/>
        <Route path={chapterData[7].path} component={ ChapterRoute7 } onEnter={requireAuth}/>
        <Route path={chapterData[8].path} component={ ChapterRoute8 } onEnter={requireAuth}/>
        <Route path={chapterData[9].path} component={ ChapterRoute9 } onEnter={requireAuth}/>
        <Route path={chapterData[10].path} component={ ChapterRoute10 } onEnter={requireAuth}/>
        <Route path={chapterData[11].path} component={ ChapterRoute11 } onEnter={requireAuth}/>
        <Route path={chapterData[12].path} component={ ChapterRoute12 } onEnter={requireAuth}/>
        <Route path={chapterData[13].path} component={ ChapterRoute13 } onEnter={requireAuth}/>
        <Route path={chapterData[14].path} component={ ChapterRoute14 } onEnter={requireAuth}/>
        <Route path={chapterData[18].path} component={ ChapterRoute18 } onEnter={requireAuth}/>
      </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});

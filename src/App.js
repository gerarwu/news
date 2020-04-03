import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import TimeLineNews from './components/TimeLineNews/TimeLineNews';
import Searcher from './components/Searcher/Searcher';
import BottomMenu from './components/BottomMenu/BottomMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/general' component={Searcher} />
          <Route path='/timeline'  component={TimeLineNews} />
          <Route path='/'  component={TimeLineNews} />
        </Switch>

        {/*<BottomMenu/>*/}
      </div>
    );
  }
}

export default App;

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
        <div className='TopBar'>
          Top bar
        </div>
        <Switch>
          <Route path='/searcher' component={Searcher} />
          <Route path='/'  component={TimeLineNews} />
        </Switch>

        {/* <BottomMenu/> */}
      </div>
    );
  }
}

export default App;

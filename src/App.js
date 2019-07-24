import React, { Component } from 'react';
import './App.css';

import Home from './components/Home'
import About from './components/About'
import List from './components/List'
import AppNotFound from './components/AppNotFound'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["frog", "dog", "cat", "monkey"]
    }
  }

  render() {
    return (
      <Router>
        <div className="nav">

          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about/">About</Link>
          <Link className="link" to="/list/">List</Link>
        </div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about/" component={ About } />
          <Route
            path="/list/"
            render={ (props) => <List { ...props } list={ this.state } /> } />
          <Route component={ AppNotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;



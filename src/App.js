import React, { Component } from 'react';
import './App.css';

import Home from './components/Home'
import About from './components/About'
import List from './components/List'
import AppNotFound from './components/AppNotFound'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    list: ["frog", "dog", "cat", "monkey"]
  }

  render() {
    return (

      <div className="nav">
        <h1>Router Lesson</h1>
        {/* <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about/">About</Link>
        <Link className="link" to="/list/">List</Link> */}
      </div>
    );
  }
}

export default App;



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
      <Router>
        <div className="nav">
          <h1>Router Lesson</h1>
          
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about/">About</Link>
          <Link className="link" to="/list/">List</Link>
        </div>
        <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route 
          path="/list"
          render={() => <List  animalList={this.state.list}/>}
          />
        <Route>
          <AppNotFound />
        </Route>
        </Switch>

      </Router>
    );
  }
}

export default App;



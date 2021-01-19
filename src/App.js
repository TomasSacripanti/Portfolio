import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/Homepage';


export class App extends Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/Portfolio" component={Homepage}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;


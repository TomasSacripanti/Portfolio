import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/Homepage';


export class App extends Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Homepage></Homepage>
      </Router>
    )
  }
}

export default App;


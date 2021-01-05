import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/Homepage';
// import Blog from './pages/Blog';


export class App extends Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          {/* <Route exact path="/blog" component={Blog}></Route> */}
        </Switch>
      </Router>
    )
  }
}

export default App;


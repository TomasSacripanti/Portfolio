import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Lines from './components/Lines';

export class App extends Component {
  render() {
    return (
      <>
        <Lines></Lines>
        <Header></Header>
        <Main></Main>
        <About></About>
        <Skills></Skills>
      </>
    )
  }
}

export default App;


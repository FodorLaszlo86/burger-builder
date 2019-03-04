import React, { Component } from 'react';
import style from './sampleStyle.css';

class App extends Component {
  render() {
    return (
      <div className={ style.center } >
      <h1 className={ style.big_red } >Hello React I am hungry, Get me a BURGER</h1>
      </div>
    );
  }
}

export default App;

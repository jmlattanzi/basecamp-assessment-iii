import React, { Component } from 'react';
import Timer from './components/Timer';
import Button from './components/Buttons';
import Blocks from './components/Blocks'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Basecamp React</h1>
        <em><p>Here are some components, I initially wanted to write an update function for the clock, but then I didn't.</p></em>
        <em>¯\_(ツ)_/¯</em>
        <header className="Container">
          <Timer/>
          <Button/>
          <Blocks/>
        </header>
        <em><p>Also, I made them all stateless components. I hope that's okay.</p></em>
      </div>
    );
  }
}

export default App;

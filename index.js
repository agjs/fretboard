import React, { Component } from 'react';
import { render } from 'react-dom';
import Fretboard from './components/Fretboard';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Fretboard />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

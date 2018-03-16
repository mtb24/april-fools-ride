import React, { Component } from 'react';
import logo from './assets/icons/Cog.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">April Fools Ride</h1>
        </header>
        <p className="App-intro">
          Yay, We're live!
        </p>
      </div>
    );
  }
}

export default App;

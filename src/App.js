import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Nav from './nav.js';
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Nav/>
        <p className="App-intro">
          Yay, We're live!
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;

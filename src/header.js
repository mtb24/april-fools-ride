import React, { Component } from 'react';
import './header.css';
import logo from './assets/icons/Cog.jpg';


class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">April Fools Ride</h1>
            </header>
        );
    }
}
 export default Header;
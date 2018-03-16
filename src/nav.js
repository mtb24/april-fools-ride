import React, { Component } from 'react';
import './nav.css';


class Nav extends Component {
    render() {
        return (
            <div className="nav-list">
                <button id="fblogin">Login with FB</button>
            </div>
        );
    }
}

export default Nav;
import React, { Component } from 'react';
import './nav.css';
import {facebookLogin} from './social-login';


class Nav extends Component {
    render() {
        return (
            <div className="nav-list">
                <button id="fblogin" onClick={facebookLogin}>Login with FB</button>
            </div>
        );
    }
}

export default Nav;
import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <header className="nav">
        <h1>
          <a href="#">
            <img alt="logo" />
          </a>
        </h1>
      </header>
    );
  }
}

export default Nav;

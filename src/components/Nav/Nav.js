import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <img className="logo" src="../images/ssongBuckslogo.png" alt="logo" />
        <nav className="navWrap">
          <ul className="navMenu">
            <li className="navList">
              <a href="/">COFFEE</a>
              <a href="/">MENU</a>
              <a href="/">STORE</a>
              <a href="/">MY SSONGBUCKS</a>
              <a href="/">WHAT'S NEW</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;

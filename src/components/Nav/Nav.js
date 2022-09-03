import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <img className="logo" src="../images/ssongBuckslogo.png" alt="logo" />
        <nav className="navContainer">
          <div class="navList">
            <a href="/">COFFEE</a>
          </div>
          <ul className="navMenu">
            <li className="navListItem">
              <h2>커피</h2>
            </li>
            <li className="navListItem">
              <a href="/">쏭벅스 원두</a>
            </li>
            <li className="navListItem">
              <a href="/">쏭벅스 비아</a>
            </li>
            <li className="navListItem">
              <a href="/">쏭벅스 엣홈 at 캡슐</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;

import { NavLink } from 'react-router-dom';
import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <header className="header-nav d-flex">
      <h1>Math Magicians</h1>
      <nav>
        <ul className="links-li d-flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>&#124;</li>
          <li>
            <NavLink to="calculator">Calculator</NavLink>
          </li>
          <li>&#124;</li>
          <li>
            <NavLink to="quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;

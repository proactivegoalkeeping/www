import { Link } from 'gatsby';
import React from 'react';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link to="/">HOME</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/coaching">COACHING</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/locations">LOCATIONS</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = ({ links }) => (
  <header className="app-header">
    <h1>Math Magicians</h1>
    <nav>
      {links.map((link) => (
        <div key={`NavLinkTo${link.text}`}>
          <NavLink
            to={link.path}
            className={`nav-link ${({ isActive }) => (isActive ? 'active' : '')}`}
          >
            {link.text}
          </NavLink>
        </div>
      ))}
    </nav>
  </header>
);
/*

*/
Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;

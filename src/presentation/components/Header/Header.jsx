import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = ({ links }) => (
  <header className="app-header">
    <h1 data-testid="title">Math Magicians</h1>
    <nav data-testid="nav">
      <div key={`NavLinkTo${links.text}`}>
        {links.map((link) => (
          <div key={`NavLinkTo${link.text}`}>
            <NavLink
              data-testid="navlink"
              to={link.path}
              className={
                `nav-link ${({ isActive }) => (isActive ? 'active' : '')}`
              }
            >
              {link.text}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  </header>
);
Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;

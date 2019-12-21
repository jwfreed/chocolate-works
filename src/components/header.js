import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import logo from '../images/chocolate-works-logo.png';
import Menu from './menu';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `0`
    }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'center'
      }}>
      <Link to='/' style={{}}>
        <div style={{ margin: 0 }}>
          <img src={logo} alt='Logo' />
        </div>
      </Link>
    </div>
    <Menu />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

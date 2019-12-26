import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import logo from '../images/chocolate-works-logo.png';
import Menu from './menu';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#422423`,
      marginBottom: `0`,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960
      }}>
      <Link to='/' style={{}}>
        <div style={{ margin: '0px', padding: '0px', width: '170px' }}>
          <img
            src={logo}
            alt='Logo'
            style={{
              marginBottom: '0px',
              padding: '0px, 0px'
            }}
          />
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

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import logo from '../images/chocolate-works-logo.png';

import { Link } from 'gatsby';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className='main-content'>
        <main>{children}</main>
        <footer>
          <h3
            style={{
              textAlign: 'center',
              margin: '0px',
              padding: '15px'
            }}>
            Call Us To Find Out More At (718) 564-6565
          </h3>
          <Link to='/' style={{}}>
            <div style={{ margin: '0px', padding: '0px', width: '120px' }}>
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
          <address>110 Montague St, Brooklyn, NY 11201</address>©{' '}
          {new Date().getFullYear()}, Chocolate Works
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

import React from 'react';
import Link from 'gatsby-link';

const Menu = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '75%',
        marginBottom: '0rem'
      }}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/birthdays'>Birthdays</Link>
      </li>
      <li>
        <Link to='/workshops'>Workshops</Link>
      </li>
      <li>
        <Link to='/fieldtrips'>Fieldtrips</Link>
      </li>
    </ul>
  </div>
);
export default Menu;

import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ links }) => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.list}>
        {links.map((link, index) => (
          <li key={index} style={styles.listItem}>
            <a href={link.url} style={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
  },
  listItem: {
    margin: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '8px 12px',
  },
};

export default NavBar;

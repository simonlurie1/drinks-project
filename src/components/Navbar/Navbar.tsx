import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { cocktailsPath, createCocktailPath } from '../../utils/routePaths';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navBar}>
      <NavLink to="/">
        <img src="https://www.thecocktaildb.com/images/logo.png" alt="logo" />
      </NavLink>
      <ul className={styles.navBarList}>
        <li>
          <NavLink
            to="/"
            className={styles.navLink}
            style={({ isActive }) => ({
              color: isActive ? '#007bff' : '#333',
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={cocktailsPath}
            className={styles.navLink}
            style={({ isActive }) => ({
              color: isActive ? '#007bff' : '#333',
            })}
          >
            Cocktails
          </NavLink>
        </li>
        <li>
          <NavLink
            to={createCocktailPath}
            className={styles.navLink}
            style={({ isActive }) => ({
              color: isActive ? '#007bff' : '#333',
            })}
          >
            Create Drink
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

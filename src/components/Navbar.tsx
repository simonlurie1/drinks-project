import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #e7e7e7',
      }}
    >
      <div className="logo">
        <NavLink to="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>
          RTK Query Demo
        </NavLink>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#007bff' : '#333',
              textDecoration: 'none',
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            style={({ isActive }) => ({
              color: isActive ? '#007bff' : '#333',
              textDecoration: 'none',
            })}
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? '#007bff' : '#333',
              textDecoration: 'none',
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/simon"
            style={({ isActive }) => ({
              color: isActive ? '#007bff' : '#333',
              textDecoration: 'none',
            })}
          >
            simon
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

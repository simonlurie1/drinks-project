import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} My App by Simon lurie
      </footer>
    </div>
  );
};

export default Layout;

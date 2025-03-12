import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container" style={{ padding: '20px' }}>
        <Outlet />
      </main>
      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #eee' }}>
        &copy; {new Date().getFullYear()} My RTK App
      </footer>
    </div>
  );
};

export default Layout;

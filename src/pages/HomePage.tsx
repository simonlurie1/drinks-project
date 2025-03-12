import React from 'react';

import styles from '../styles/HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our RTK Query Demo</h1>
      <p className={styles.description}>
        This is a simple demo of React with Redux Toolkit and RTK Query for API calls.
      </p>
      <div className={styles.featuresContainer}>
        <h2 className={styles.featuresTitle}>Features</h2>
        <ul className={styles.featuresList}>
          <li>React Router for navigation</li>
          <li>Redux Toolkit for state management</li>
          <li>RTK Query for data fetching and caching</li>
          <li>Multiple pages with shared layout</li>
          <li>TypeScript for type safety</li>
          <li>SCSS Modules for component styling</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

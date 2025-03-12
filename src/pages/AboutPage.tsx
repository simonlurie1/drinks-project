import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p>
        This is a demo application showcasing the usage of React, Redux Toolkit, and RTK Query with
        TypeScript.
      </p>
      <p>
        The app fetches data from JSONPlaceholder API and displays it in a clean, organized way.
      </p>

      <h2 style={{ marginTop: '20px' }}>Technologies Used</h2>
      <ul>
        <li>React (Frontend library)</li>
        <li>Redux Toolkit (State management)</li>
        <li>RTK Query (Data fetching and caching)</li>
        <li>React Router (Navigation)</li>
        <li>TypeScript (Type safety)</li>
      </ul>
    </div>
  );
};

export default AboutPage;

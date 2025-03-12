import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import PostsPage from './pages/PostsPage';
import PlayGround from './PlayGround';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:postId" element={<PostPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="simon" element={<PlayGround />} />
      </Route>
    </Routes>
  );
};

export default App;

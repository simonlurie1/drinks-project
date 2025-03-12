import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setSelectedPost } from './postsSlice';
import { AppDispatch } from '../../app/store';
import { useGetPostsQuery } from '../api/apiSlice';

const PostsList: React.FC = () => {
  const { data: posts, isLoading, isError, error } = useGetPostsQuery();
  const dispatch = useDispatch<AppDispatch>();

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error loading posts: {(error as Error).toString()}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        {posts?.map(post => (
          <div
            key={post.id}
            style={{
              padding: '15px',
              border: '1px solid #eee',
              borderRadius: '5px',
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
            <Link
              to={`/posts/${post.id}`}
              onClick={() => dispatch(setSelectedPost(post.id))}
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '5px 10px',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '3px',
              }}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;

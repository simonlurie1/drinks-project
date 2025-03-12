import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { useGetPostQuery, useGetPostCommentsQuery } from '../api/apiSlice';

interface PostParams {
  postId: string;
}

const PostDetails: React.FC = () => {
  const { postId } = useParams<keyof PostParams>() as PostParams;
  const { data: post, isLoading: isLoadingPost, isError: isPostError } = useGetPostQuery(postId);
  const { data: comments, isLoading: isLoadingComments } = useGetPostCommentsQuery(postId);

  if (isLoadingPost) {
    return <div>Loading post...</div>;
  }

  if (isPostError) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Link
        to="/posts"
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          padding: '5px 10px',
          backgroundColor: '#6c757d',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '3px',
        }}
      >
        &larr; Back to Posts
      </Link>
      {post && (
        <article>
          <h1>{post.title}</h1>
          <div style={{ marginBottom: '30px' }}>{post.body}</div>

          <h3>Comments</h3>
          {isLoadingComments ? (
            <p>Loading comments...</p>
          ) : (
            <div style={{ display: 'grid', gap: '15px' }}>
              {comments?.map(comment => (
                <div
                  key={comment.id}
                  style={{
                    padding: '10px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '5px',
                  }}
                >
                  <h4>{comment.name}</h4>
                  <p>
                    <em>{comment.email}</em>
                  </p>
                  <p>{comment.body}</p>
                </div>
              ))}
            </div>
          )}
        </article>
      )}
    </div>
  );
};

export default PostDetails;

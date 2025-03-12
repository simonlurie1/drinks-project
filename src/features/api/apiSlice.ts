import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Post, Comment } from '../../types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
    }),

    getPost: builder.query<Post, string | number>({
      query: postId => `/posts/${postId}`,
    }),
    getPostComments: builder.query<Comment[], string | number>({
      query: postId => `/posts/${postId}/comments`,
    }),
    getTodos: builder.query<any[], void>({
      query: () => '/todos',
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useGetPostCommentsQuery, useGetTodosQuery } =
  apiSlice;

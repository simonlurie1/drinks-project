import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MockType } from './mocks/types';

export const mockApiSlice = createApi({
  reducerPath: 'mocks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://67d432ef8bca322cc26c85a4.mockapi.io/cocktails/drinks',
  }),
  tagTypes: ['mockGetTag'],
  endpoints: builder => ({
    getCocktails: builder.query<MockType[], void>({
      query: () => `/`,
      providesTags: [{ type: 'mockGetTag', id: 'LIST' }],
    }),
    setCocktail: builder.mutation<MockType[], MockType>({
      query: payload => ({
        url: '/',
        body: { ...payload },
        method: 'POST',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(mockApiSlice.util.invalidateTags([{ type: 'mockGetTag', id: 'LIST' }])); // Use the same format
        } catch (e) {
          console.error('error create a drink', e);
        }
      },
    }),
  }),
});

export const { useGetCocktailsQuery, useLazyGetCocktailsQuery, useSetCocktailMutation } =
  mockApiSlice;

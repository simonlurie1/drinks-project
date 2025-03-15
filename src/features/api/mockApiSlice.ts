import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MockType } from './mocks/types';

export const mockApiSlice = createApi({
  reducerPath: 'mocks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://67d432ef8bca322cc26c85a4.mockapi.io/cocktails/drinks',
  }),
  endpoints: builder => ({
    getCocktails: builder.query<MockType[], void>({
      query: () => `/`,
      // @ts-ignore
      providesTags: ['mockGetTag'],
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

          // @ts-ignore
          dispatch(mockApiSlice.util.invalidateTags(['mockGetTag']));
        } catch (e) {
          console.error('error create a drink', e);
        }
      },
    }),
  }),
});

export const { useGetCocktailsQuery, useLazyGetCocktailsQuery, useSetCocktailMutation } =
  mockApiSlice;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CocktailResponse, Drink } from './drinks/types';

export const mockSlice = createApi({
  reducerPath: 'mocks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://67d432ef8bca322cc26c85a4.mockapi.io/cocktails/drinks',
  }),
  endpoints: builder => ({
    getCocktails: builder.query<any, void>({
      query: () => `/`,
    }),
    setCocktail: builder.mutation<any[], any>({
      query: payload => ({
        url: '/',
        body: { ...payload },
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetCocktailsQuery, useSetCocktailMutation } = mockSlice;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CocktailResponse, Drink } from './drinks/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/' }),
  endpoints: builder => ({
    searchCocktailByName: builder.query<{ value: string; label: string }[], string>({
      query: name => `search.php?s=${name}`,
      transformResponse(response: CocktailResponse) {
        return response?.drinks?.map((item: Drink) => ({
          value: item.idDrink,
          label: item.strDrink,
        }));
      },
    }),
    listAllCocktailsByFirstLetter: builder.query<{ value: string; label: string }[], string>({
      query: letter => `search.php?f=${letter}`,
      transformResponse(response: CocktailResponse) {
        return response?.drinks?.map((item: Drink) => ({
          value: item.idDrink,
          label: item.strDrink,
        }));
      },
    }),
    lookupFullCocktailDetailsById: builder.query<CocktailResponse, string>({
      query: idDrink => `/lookup.php?i=${idDrink}`,
    }),
    filterByCategory: builder.query<CocktailResponse, string>({
      query: (category = 'Cocktail') => `filter.php?c=${category}`,
    }),
    searchIngredientByName: builder.query<CocktailResponse, string>({
      query: (drinkName = '') => `filter.php?c=${drinkName}`,
    }),
    lookupIngredientByID: builder.query<CocktailResponse, string>({
      query: idDrink => `/lookup.php?iid=${idDrink}`,
    }),
  }),
});

export const {
  useLazySearchCocktailByNameQuery,
  useLazyListAllCocktailsByFirstLetterQuery,
  useLookupFullCocktailDetailsByIdQuery,
  useFilterByCategoryQuery,
  useSearchIngredientByNameQuery,
  useLookupIngredientByIDQuery,
} = apiSlice;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { apiSlice } from '../api/apiSlice';
import { mockApiSlice } from '../api/mockApiSlice';
import drinksReducer from '../api/drinks/drinksSlice';

// Configure the persistence
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['drinks'], // only persist drinks reducer
  blacklist: [apiSlice.reducerPath, mockApiSlice.reducerPath], // don't persist API cache
};

// Create root reducer
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [mockApiSlice.reducerPath]: mockApiSlice.reducer,
  drinks: drinksReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(apiSlice.middleware)
      .concat(mockApiSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

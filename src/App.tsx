import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CreateDrink from './pages/Cocktails/CreateDrink/CreateDrink';
import CocktailsPage from './pages/Cocktails/CocktailsPage/CocktailsPage';
import HomePage from './pages/HomePage/HomePage';
import CocktailDetails from './pages/Cocktails/CocktailDetails/CocktailDetails';
import 'antd/dist/reset.css';
import { cocktailDetailsPath, cocktailsPath, createCocktailPath } from './utils/routePaths';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={createCocktailPath} element={<CreateDrink />} />
            <Route path={cocktailsPath} element={<CocktailsPage />} />
            <Route path={cocktailDetailsPath} element={<CocktailDetails />} />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
};

export default App;

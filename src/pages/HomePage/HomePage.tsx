import React from 'react';

import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to thecocktaildb</h1>
      <a href="https://www.thecocktaildb.com/api.php" target="_blank">
        https://www.thecocktaildb.com/api.php
      </a>
      <div className="center">
        <br />
        <h1>V1 API</h1>
        <b>API Methods using the developer test key '1' in the URL</b>
        <br />
        <br />
        <i>Search cocktail by name</i>
        <br />
        www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
        <br />
        <br />
        <i>List all cocktails by first letter</i>
        <br />
        www.thecocktaildb.com/api/json/v1/1/search.php?f=a
        <br />
        <br />
        <i>Search ingredient by name</i>
        <br />
        www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
        <br />
        <br />
        <i>Lookup full cocktail details by id</i>
        <br />
        www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
        <br />
        <br />
        <i>Lookup ingredient by ID</i>
        <br />
        www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552
        <br />
        <br />
        <i>Lookup a random cocktail</i>
        <br />
        www.thecocktaildb.com/api/json/v1/1/random.php
        <br />
        <br />
        <i>Lookup a selection of 10 random cocktails</i>{' '}
        <a href="https://www.paypal.com/ncp/payment/88VWXR6UMH2B2">*Premium API only</a>
        <br />
        www.thecocktaildb.com/api/json/v1/1/randomselection.php
        <br />
        <br />
        <i>List Popular cocktails</i>{' '}
        <a href="https://www.paypal.com/ncp/payment/88VWXR6UMH2B2">*Premium API only</a>
        <br />
        www.thecocktaildb.com/api/json/v1/1/popular.php
        <br />
        <br />
        <i>List most latest cocktails</i>{' '}
        <a href="https://www.paypal.com/ncp/payment/88VWXR6UMH2B2">*Premium API only</a>
        <br />
        www.thecocktaildb.com/api/json/v1/1/latest.php
        <br />
        <br />
        <i>Search by ingredient</i>
        <br />
        www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
        <br />
        www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka
        <br />
        <br />
        <i>Filter by multi-ingredient</i>{' '}
        <a href="https://www.paypal.com/ncp/payment/88VWXR6UMH2B2">*Premium API only</a>
        <br />
        www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis
        <br />
        <br />
        <i>Filter by alcoholic</i>
        <br />
        www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
        <br />
        www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
        <br />
        <br />
        <i>Filter by Category</i>
        <br />
        www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
        <br />
        www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
        <br />
        <br />
        <i>Filter by Glass</i>
        <br />
        www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
        <br />
        www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute
        <br />
        <br />
        <i>List the categories, glasses, ingredients or alcoholic filters</i>
        <br />
        www.thecocktaildb.com/api/json/v1/1/list.php?c=list
        <br />
        www.thecocktaildb.com/api/json/v1/1/list.php?g=list
        <br />
        www.thecocktaildb.com/api/json/v1/1/list.php?i=list
        <br />
        www.thecocktaildb.com/api/json/v1/1/list.php?a=list
        <br />
        <br />
        <br />
        <br />
        Drink thumbnails <br />
        Add <b>/small</b> to the end of the cocktail image URL
        <br />
        /images/media/drink/vrwquq1478252802.jpg/small (200x200 px)
        <br />
        /images/media/drink/vrwquq1478252802.jpg/medium (350x350 px)
        <br />
        /images/media/drink/vrwquq1478252802.jpg/large (500x500 px)
        <br />
        <img src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/small" />
        <br />
        <br />
        Ingredient Thumbnails
        <br />
        www.thecocktaildb.com/images/ingredients/gin-small.png
        <br />
        (100x100 px)
        <br />
        www.thecocktaildb.com/images/ingredients/gin-medium.png
        <br />
        (350x350 px)
        <br />
        www.thecocktaildb.com/images/ingredients/gin.png
        <br />
        (700x700 px)
        <br />
        <img
          src="https://www.thecocktaildb.com/images/ingredients/gin-small.png"
          width="100"
          height="100"
        />
        <img
          src="https://www.thecocktaildb.com/images/ingredients/gin-medium.png"
          width="200"
          height="200"
        />
        <img
          src="https://www.thecocktaildb.com/images/ingredients/gin.png"
          width="350"
          height="350"
        />
      </div>
    </div>
  );
};

export default HomePage;

import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useLookupFullCocktailDetailsByIdQuery } from '../../../api/apiSlice';
import { Drink } from '../../../api/drinks/types';
import styles from './CocktailDetails.module.scss';
import { selectedDrink } from '../../../api/drinks/selectors';

interface DrinkParams {
  id: string;
}

const CocktailDetails: React.FC = () => {
  // const { id } = useParams<keyof DrinkParams>() as DrinkParams;

  const selectedDrinkVal = useSelector(selectedDrink);

  const { data, isLoading, isError } = useLookupFullCocktailDetailsByIdQuery(
    selectedDrinkVal?.toString() || '',
    {
      skip: !selectedDrinkVal,
    },
  );
  if (isLoading) {
    return <div>Loading drink...</div>;
  }

  if (isError) {
    return <div>Drink not found</div>;
  }
  const currentDrink = data?.drinks?.[0];

  return (
    <div>
      {currentDrink && (
        <div className={styles.cocktailDetailsPage}>
          <h1>
            {currentDrink.strDrink} - ID: {selectedDrinkVal}
          </h1>

          <Link to={`/cocktails`}>Back</Link>
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <img src={currentDrink.strDrinkThumb} alt={currentDrink.strDrink} />
            </div>
            <div className={styles.detailsList}>
              {Object.keys(currentDrink).map(drinkKey => {
                if (currentDrink[drinkKey as keyof Drink]) {
                  return (
                    <div key={drinkKey} className={styles.detailsLine}>
                      <label>{drinkKey}:</label>
                      <span className={styles.drinkValue}>
                        {currentDrink[drinkKey as keyof Drink] || 'N/A'}
                      </span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CocktailDetails;

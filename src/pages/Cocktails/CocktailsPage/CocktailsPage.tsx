import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Card } from 'antd';
import { useFilterByCategoryQuery } from '../../../features/api/apiSlice';
import { Drink } from '../../../features/api/drinks/types';
import { Link } from 'react-router-dom';
import styles from '../CocktailPage.module.scss';
import SearchBar from '../SearchBar';

const CocktailsPage: React.FC = () => {
  const { data, isFetching, isLoading, isError } = useFilterByCategoryQuery('Cocktail');

  return (
    <div>
      <h1>Drinks</h1>

      {isError && <div>Error</div>}
      {isLoading || isFetching ? (
        <div>Loading </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.cocktails}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={10}
              slidesPerGroup={3}
              navigation
              breakpoints={{
                0: {
                  slidesPerView: 3,
                },
                800: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 8,
                },
              }}
              grabCursor={true}
              pagination={{ clickable: true }}
            >
              {data?.drinks?.map((cocktail: Drink) => (
                <SwiperSlide key={cocktail.idDrink}>
                  <Link to={`/cocktails/${cocktail.idDrink}`}>
                    <Card
                      hoverable
                      cover={
                        <img alt={cocktail.strDrink} src={`${cocktail.strDrinkThumb}/small`} />
                      }
                    >
                      <Card.Meta title={cocktail.strDrink} />
                    </Card>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <SearchBar />
        </div>
      )}
    </div>
  );
};
export default CocktailsPage;

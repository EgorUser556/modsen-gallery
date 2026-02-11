import '../ImagesPage/ImagesPage.css';

import ImageCard from '@components/ImageCard/ImageCard';
import ImageGrid from '@components/ImageGrid/ImageGrid';
import Loader from '@components/Loader/Loader';
import useDebounce from '@hooks/useDebounce';
import { useFavourites } from '@store/FavouritesContext';
import React, { useEffect, useState } from 'react';

import styles from './FavouritePage.module.css';

const FavouritePage: React.FC = () => {
  const { favouritesList, isFavourite, toggleFavourite } = useFavourites();

  const [loading, setLoading] = useState(true);
  const debouncedLoading = useDebounce(loading, 400);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className={styles.page}>
      {!debouncedLoading && favouritesList.length > 0 && (
        <div className={styles.titleBlock}>
          <p className={styles.kicker}>Saved by you</p>
          <h1 className={styles.title}>Your favorites list</h1>
        </div>
      )}

      {debouncedLoading ? <Loader /> : null}

      {!debouncedLoading && favouritesList.length === 0 && (
        <section className="images-empty">
          <h1 className="images-empty__title">
            Your <span>Favorites</span> List <br />
            Is Empty
          </h1>
        </section>
      )}

      {!debouncedLoading && favouritesList.length > 0 && (
        <ImageGrid>
          {favouritesList.map((photo) => (
            <ImageCard
              key={photo.id}
              isFavourite={isFavourite(photo.id)}
              onToggleFavourite={() => toggleFavourite(photo)}
              photo={photo}
            />
          ))}
        </ImageGrid>
      )}
    </section>
  );
};

export default FavouritePage;

import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import ImageCard from '@components/ImageCard/ImageCard';
import ImageGrid from '@components/ImageGrid/ImageGrid';
import Loader from '@components/Loader/Loader';
import Modal from '@components/Modal/Modal';
import Pagination from '@components/Pagination/Pagination';
import SortSelect from '@components/SortSelect/SortSelect';
import Toolbar from '@components/Toolbar/Toolbar';
import TopImage from '@components/TopImage/TopImage';
import useImagesSearchParams from '@hooks/useImagesSearchParams';
import usePhotos from '@hooks/usePhotos';
import { useFavourites } from '@store/FavouritesContext';
import React, { useState } from 'react';

import styles from './ImagesPage.module.css';

const ImagesPage: React.FC = () => {
  const { query, orderBy, page, setQuery, setOrderBy, setPage } = useImagesSearchParams();
  const { photos, loading, error } = usePhotos(query, page, orderBy);
  if (error) throw error;

  const { isFavourite, toggleFavourite } = useFavourites();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const hasResults = (photos?.length ?? 0) > 0;
  const showEmpty = !loading && photos !== null && photos.length === 0;

  return (
    <main className={styles.root}>
      <TopImage>
        <h1 className={styles.title}>
          Let&apos;s Find Some <br />
          <span>Images</span> Here!
        </h1>

        <Toolbar onQueryChange={setQuery} query={query} />
      </TopImage>

      <section className={styles.sortRow}>
        <SortSelect onChange={setOrderBy} value={orderBy} />
      </section>

      <section className={styles.content}>
        <ErrorBoundary>
          {loading ? <Loader /> : null}

          {showEmpty ? (
            <section className={styles.empty}>
              <h1 className={styles.emptyTitle}>
                The Search Didn&apos;t <br />
                Yield Any Results, <br />
                Please Try <span>Again.</span>
              </h1>
            </section>
          ) : null}

          {!loading && hasResults && photos ? (
            <React.Fragment>
              <ImageGrid>
                {photos.map((photo, index) => (
                  <ImageCard
                    key={photo.id}
                    isFavourite={isFavourite(photo.id)}
                    onOpenModal={() => setActiveIndex(index)}
                    onToggleFavourite={() => toggleFavourite(photo)}
                    photo={photo}
                  />
                ))}
              </ImageGrid>
              <Pagination current={page} onChange={setPage} />
            </React.Fragment>
          ) : null}
        </ErrorBoundary>
      </section>

      {activeIndex !== null && photos && photos.length > 0 ? (
        <ErrorBoundary>
          <Modal
            initialIndex={activeIndex}
            isFavourite={isFavourite}
            onClose={() => setActiveIndex(null)}
            onToggleFavourite={toggleFavourite}
            photos={photos}
          />
        </ErrorBoundary>
      ) : null}
    </main>
  );
};

export default ImagesPage;

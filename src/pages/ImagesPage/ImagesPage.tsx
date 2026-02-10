import './ImagesPage.css';

import ImageCard from '@components/ImageCard/ImageCard';
import Loader from '@components/Loader/Loader';
import Modal from '@components/Modal/Modal';
import Pagination from '@components/Pagination/Pagination';
import SortSelect from '@components/SortSelect/SortSelect';
import Toolbar from '@components/Toolbar/Toolbar';
import useImagesSearchParams from '@hooks/useImagesSearchParams';
import usePhotos from '@hooks/usePhotos';
import { useFavourites } from '@store/FavouritesContext';
import React, { useState } from 'react';

const ImagesPage: React.FC = () => {
  const { query, orderBy, page, setQuery, setOrderBy, setPage } = useImagesSearchParams();
  const { photos, loading } = usePhotos(query, page, orderBy);

  const { isFavourite, toggleFavourite } = useFavourites();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const hasResults = (photos?.length ?? 0) > 0;
  const showEmpty = !loading && photos !== null && photos.length === 0;

  return (
    <main className="images">
      <section className="images__hero">
        <h1 className="images__title">
          Let&apos;s Find Some <br />
          <span>Images</span> Here!
        </h1>

        <Toolbar onQueryChange={setQuery} query={query} />
      </section>

      <section className="images__sort-row">
        <SortSelect onChange={setOrderBy} value={orderBy} />
      </section>

      <section className="images__content">
        {loading ? <Loader /> : null}
        {showEmpty ? (
          <section className="images-empty">
            <h1 className="images-empty__title">
              The Search Didn&apos;t <br />
              Yield Any Results, <br />
              Please Try <span>Again.</span>
            </h1>
          </section>
        ) : null}
        {!loading && hasResults && photos ? (
          <React.Fragment>
            <div className="images__grid">
              {photos.map((photo, index) => (
                <ImageCard
                  key={photo.id}
                  isFavourite={isFavourite(photo.id)}
                  onOpenModal={() => setActiveIndex(index)}
                  onToggleFavourite={() => toggleFavourite(photo)}
                  photo={photo}
                />
              ))}
            </div>

            <Pagination current={page} onChange={setPage} />
          </React.Fragment>
        ) : null}
      </section>
      {activeIndex !== null && photos && photos.length > 0 ? (
        <Modal
          initialIndex={activeIndex}
          isFavourite={isFavourite}
          onClose={() => setActiveIndex(null)}
          onToggleFavourite={toggleFavourite}
          photos={photos}
        />
      ) : null}
    </main>
  );
};

export default ImagesPage;

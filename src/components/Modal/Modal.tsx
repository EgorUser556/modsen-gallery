import FavouriteButton from '@components/FavouriteButton/FavouriteButton';
import Loader from '@components/Loader/Loader';
import React, { useEffect, useState } from 'react';

import type { UnsplashPhoto } from '@/types/UnplashApiTypes';

import styles from './Modal.module.css';

interface ModalProps {
  photos: UnsplashPhoto[];
  initialIndex: number;
  isFavourite: (id: string) => boolean;
  onToggleFavourite: (photo: UnsplashPhoto) => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  photos,
  initialIndex,
  isFavourite,
  onToggleFavourite,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  if (photos.length === 0) {
    throw new Error('Modal: photos is empty');
  }

  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsLoadingImage(true);
  }, [initialIndex]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setIsLoadingImage(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setIsLoadingImage(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') onClose();
  };

  const title = currentPhoto.description ?? currentPhoto.alt_description;
  const favourite = isFavourite(currentPhoto.id);

  return (
    <div
      className={styles.root}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="presentation"
    >
      <button aria-label="Close" className={styles.close} onClick={onClose} type="button" />

      <button
        aria-label="Previous image"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={handlePrev}
        type="button"
      />

      <button
        aria-label="Next image"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={handleNext}
        type="button"
      />

      <div className={styles.dialog}>
        {isLoadingImage ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : null}

        <img
          alt={currentPhoto.alt_description ?? 'Image'}
          className={`${styles.img} ${isLoadingImage ? styles.imgHidden : ''}`}
          onLoad={() => setIsLoadingImage(false)}
          src={currentPhoto.urls.regular}
        />

        <div className={styles.bottom}>
          <p className={styles.caption}>{title}</p>
          <FavouriteButton isActive={favourite} onClick={() => onToggleFavourite(currentPhoto)} />
        </div>
      </div>
    </div>
  );
};

export default Modal;

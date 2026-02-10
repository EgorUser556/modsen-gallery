import './Modal.css';

import FavouriteButton from '@components/FavouriteButton/FavouriteButton';
import Loader from '@components/Loader/Loader';
import React, { useEffect, useState } from 'react';

import type { UnsplashPhoto } from '@/types/UnplashApiTypes';

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
      className="modal"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="presentation"
    >
      <button aria-label="Close" className="modal__close" onClick={onClose} type="button" />
      <button
        aria-label="Previous image"
        className="modal__arrow modal__arrow--left"
        onClick={handlePrev}
        type="button"
      />
      <button
        aria-label="Next image"
        className="modal__arrow modal__arrow--right"
        onClick={handleNext}
        type="button"
      />

      <div className="modal__dialog">
        {isLoadingImage ? (
          <div className="modal__loader">
            <Loader />
          </div>
        ) : null}

        <img
          alt={currentPhoto.alt_description ?? 'Image'}
          className={isLoadingImage ? 'modal__image modal__image--hidden' : 'modal__image'}
          onLoad={() => setIsLoadingImage(false)}
          src={currentPhoto.urls.regular}
        />

        <div className="modal__bottom">
          <p className="modal__caption">{title}</p>
          <FavouriteButton isActive={favourite} onClick={() => onToggleFavourite(currentPhoto)} />
        </div>
      </div>
    </div>
  );
};

export default Modal;

import './ImageCard.css';

import FavouriteButton from '@components/FavouriteButton/FavouriteButton';
import React from 'react';

import type { UnsplashPhoto } from '@/types/UnplashApiTypes';

interface ImageCardProps {
  photo: UnsplashPhoto;
  isFavourite: boolean;
  onToggleFavourite: () => void;
  onOpenModal: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  photo,
  isFavourite,
  onToggleFavourite,
  onOpenModal,
}) => (
  <article className="images-card">
    <button className="wrapper" onClick={onOpenModal} type="button">
      <img
        alt={photo.alt_description ?? 'Image'}
        className="image"
        loading="lazy"
        src={photo.urls.small}
      />
    </button>
    <div className="images-card__footer">
      <h3 className="images-card__title">{photo.description ?? photo.alt_description}</h3>

      <FavouriteButton isActive={isFavourite} onClick={onToggleFavourite} />
    </div>
  </article>
);

export default ImageCard;

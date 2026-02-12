import FavouriteButton from '@components/FavouriteButton/FavouriteButton';
import React from 'react';

import type { UnsplashPhoto } from '@/types/UnplashApiTypes';

import styles from './ImageCard.module.css';

interface ImageCardProps {
  photo: UnsplashPhoto;
  isFavourite: boolean;
  onToggleFavourite: () => void;
  onOpenModal?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  photo,
  isFavourite,
  onToggleFavourite,
  onOpenModal,
}) => (
  <article className={styles.card}>
    <button className={styles.btn} onClick={onOpenModal} type="button">
      <img
        alt={photo.alt_description ?? 'Image'}
        className={styles.img}
        loading="lazy"
        src={photo.urls.small}
      />
    </button>
    <div className={styles.footer}>
      <h3 className={styles.title}>{photo.description ?? photo.alt_description}</h3>
      <FavouriteButton isActive={isFavourite} onClick={onToggleFavourite} />
    </div>
  </article>
);

export default ImageCard;

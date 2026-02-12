import React from 'react';

import styles from './FavouriteButton.module.css';

interface FavouriteButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ isActive, onClick }) => (
  <button
    aria-label={isActive ? 'Remove from favourites' : 'Add to favourites'}
    className={`${styles.btn} ${isActive ? styles.active : ''}`}
    onClick={onClick}
    type="button"
  />
);

export default FavouriteButton;

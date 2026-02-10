import './FavouriteButton.css';

import React from 'react';

interface FavouriteButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ isActive, onClick }) => (
  <button
    aria-label={isActive ? 'Remove from favourites' : 'Add to favourites'}
    className={isActive ? `bookmark-button bookmark-button--active` : `bookmark-button`}
    onClick={onClick}
    type="button"
  />
);

export default FavouriteButton;

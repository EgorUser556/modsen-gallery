import './CategoryCard.css';

import type { CategoryCardProps } from '@/types/CategoryCardType';

const CategoryCard = ({ card, onClick }: CategoryCardProps) => {
  const { title, imageUrl } = card;
  if (!card) {
    throw new Error('null value');
  }
  return (
    <button className="categoryCard" onClick={onClick} type="button">
      {imageUrl ? (
        <img alt={title} className="categoryCard__img" loading="lazy" src={imageUrl} />
      ) : (
        <div aria-hidden="true" className="categoryCard__img categoryCard__img--placeholder" />
      )}
      <div className="categoryCard__label">{title}</div>
    </button>
  );
};

export default CategoryCard;

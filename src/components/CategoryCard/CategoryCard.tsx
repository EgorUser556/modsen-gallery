import type { CategoryCardProps } from '@/types/CategoryCardType';

import styles from './CategoryCard.module.css';

const CategoryCard = ({ card, onClick }: CategoryCardProps) => {
  const { title, imageUrl } = card;
  if (!card) {
    throw new Error('null value');
  }

  return (
    <button className={styles.card} onClick={onClick} type="button">
      {imageUrl ? (
        <img alt={title} className={styles.img} loading="lazy" src={imageUrl} />
      ) : (
        <div aria-hidden="true" className={`${styles.img} ${styles.placeholder}`} />
      )}
      <div className={styles.label}>{title}</div>
    </button>
  );
};

export default CategoryCard;

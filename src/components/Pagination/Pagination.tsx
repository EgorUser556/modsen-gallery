import React from 'react';

import styles from './Pagination.module.css';

interface PaginationProps {
  current: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ current, onChange }) => {
  const pages = [1, 2, 3, 4];

  const handleNextClick = () => {
    if (current < 4) {
      onChange(current + 1);
    }
  };

  return (
    <nav aria-label="Pagination" className={styles.root}>
      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.item} ${page === current ? styles.itemActive : ''}`}
          onClick={() => onChange(page)}
          type="button"
        >
          {page}
        </button>
      ))}

      {current < 4 && (
        <button
          aria-label="Next page"
          className={styles.next}
          onClick={handleNextClick}
          type="button"
        />
      )}
    </nav>
  );
};

export default Pagination;

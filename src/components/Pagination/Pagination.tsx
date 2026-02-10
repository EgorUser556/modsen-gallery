import './Pagination.css';

import React from 'react';

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
    <nav aria-label="Pagination" className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          type="button"
          className={
            page === current ? 'pagination__item pagination__item--active' : 'pagination__item'
          }
        >
          {page}
        </button>
      ))}

      {current < 4 && (
        <button
          aria-label="Next page"
          className="pagination__next"
          onClick={handleNextClick}
          type="button"
        />
      )}
    </nav>
  );
};

export default Pagination;

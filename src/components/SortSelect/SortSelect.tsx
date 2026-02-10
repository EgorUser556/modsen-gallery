import './SortSelect.css';

import React from 'react';

import type { OrderBy } from '@/types/UnplashApiTypes';

interface SortSelectProps {
  value: OrderBy;
  onChange: (value: OrderBy) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ value, onChange }: SortSelectProps) => (
  <div className="sort">
    <span className="sort__label">Sort by</span>
    <div className="sort__select-wrapper">
      <select
        className="sort__select"
        onChange={(event) => onChange(event.target.value as OrderBy)}
        value={value}
      >
        <option value="relevant">Relevant</option>
        <option value="latest">Latest</option>
      </select>
    </div>
  </div>
);

export default SortSelect;

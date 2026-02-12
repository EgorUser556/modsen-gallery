import React from 'react';

import type { OrderBy } from '@/types/UnplashApiTypes';

import styles from './SortSelect.module.css';

interface SortSelectProps {
  value: OrderBy;
  onChange: (value: OrderBy) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ value, onChange }) => (
  <div className={styles.root}>
    <span className={styles.label}>Sort by</span>
    <div className={styles.wrap}>
      <select
        className={styles.select}
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

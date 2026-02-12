import React from 'react';

import styles from './Toolbar.module.css';

interface ToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ query, onQueryChange }) => (
  <div className={styles.root}>
    <form className={styles.search} onSubmit={(event) => event.preventDefault()}>
      <input
        className={styles.input}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Food"
        value={query}
      />
      <span aria-hidden="true" className={styles.icon} />
    </form>
  </div>
);

export default Toolbar;

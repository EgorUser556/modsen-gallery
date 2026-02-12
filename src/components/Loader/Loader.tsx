import React from 'react';

import styles from './Loader.module.css';

const Loader: React.FC = () => (
  <div className={styles.root}>
    <div className={styles.spinner} />
  </div>
);

export default Loader;

import React from 'react';

import styles from './NotFoundPage.module.css';

const NotFoundPage: React.FC = () => (
  <section className={styles.page}>
    <div className={styles.content}>
      <div className={styles.code}>404</div>
      <div className={styles.label}>NOT FOUND</div>

      <h1 className={styles.title}>
        The Page Was <span className={styles.accent}>Not</span>
        <br />
        <span className={styles.accent}>Found</span>, Please
        <br />
        Return To The Main
        <br />
        Page.
      </h1>
    </div>
  </section>
);

export default NotFoundPage;

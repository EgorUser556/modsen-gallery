import React from 'react';

import styles from './NotFoundPage.module.css';

const NotFoundPage: React.FC = () => (
  <section className={styles.page}>
    <div className={styles.content}>
      <div className={styles.code}>404</div>
      <div className={styles.label}>NOT FOUND</div>

      <section className={styles.empty}>
        <h1 className={styles.emptyTitle}>
          The Page Was <span>Not</span>
          <br />
          <span>Found</span>, Please
          <br />
          Return To The Main
          <br />
          Page.
        </h1>
      </section>
    </div>
  </section>
);

export default NotFoundPage;

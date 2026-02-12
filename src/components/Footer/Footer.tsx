import Logo from '@components/Logo/Logo';
import SocialLinks from '@components/SocialLinks/SocialLinks';
import columns from '@constants/footer';
import React from 'react';

import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.left}>
        <Logo />
        <p className={styles.text}>
          We have images that capture every mood and inspire every vision. From breathtaking
          landscapes to vibrant portraits.
        </p>
        <SocialLinks className={styles.social} />
      </div>

      <div className={styles.cols}>
        {columns.map((col) => (
          <div key={col.title} className={styles.col}>
            <div className={styles.colTitle}>{col.title}</div>
            <div className={styles.colList}>
              {col.items.map((t) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a key={t} className={styles.link} href="#">
                  {t}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.bottom}>Modsen gallery © 2000-2025, All Rights Reserved</div>
  </footer>
);

export default Footer;

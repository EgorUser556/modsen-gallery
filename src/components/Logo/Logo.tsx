import React from 'react';

import styles from './Logo.module.css';

const Logo: React.FC = () => (
  <img alt="MODSEN GALLERY" className={styles.logo} src="/modsen-logo.png" />
);

export default Logo;

import { SOCIAL } from '@constants/icons.ts';
import React from 'react';

import styles from './SocialLinks.module.css';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }: SocialLinksProps) => (
  <div aria-label="Social links" className={`${styles.root} ${className}`.trim()}>
    {SOCIAL.map(({ key, icon, label }) => (
      <button
        key={key}
        aria-label={label}
        className={styles.btn}
        onClick={() => {}}
        title={label}
        type="button"
      >
        <img alt="" aria-hidden="true" className={styles.icon} src={icon} />
      </button>
    ))}
  </div>
);

export default SocialLinks;

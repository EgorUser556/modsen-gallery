import SocialLinks from '@components/SocialLinks/SocialLinks';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './BurgerMenu.module.css';

export interface BurgerMenuLink {
  label: string;
  to: string;
}

interface BurgerMenuProps {
  isOpen: boolean;
  links: BurgerMenuLink[];
  onClose: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, links, onClose }) => (
  <div className={`${styles.root} ${isOpen ? styles.open : ''}`}>
    <div className={styles.content}>
      <nav aria-label="Mobile navigation" className={styles.nav}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            onClick={onClose}
            to={l.to}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      <div className={styles.social}>
        <SocialLinks />
      </div>
    </div>
  </div>
);

export default BurgerMenu;

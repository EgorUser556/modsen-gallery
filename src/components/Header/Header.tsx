import BurgerMenu from '@components/BurgerMenu/BurgerMenu';
import Logo from '@components/Logo/Logo';
import type { IconKey } from '@constants/icons';
import { ICONS_BY_TO } from '@constants/icons';
import LINKS from '@constants/links';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.bar} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.inner}>
        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className={styles.burger}
          onClick={handleToggleMenu}
          type="button"
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              to={to}
            >
              {({ isActive }) => {
                const icons = ICONS_BY_TO[to as IconKey];

                let src: string | null = null;
                if (icons) {
                  src = isActive ? icons.active : icons.default;
                }
                return (
                  <React.Fragment>
                    {src ? (
                      <img alt="" aria-hidden="true" className={styles.icon} src={src} />
                    ) : null}
                    <span className={styles.text}>{label}</span>
                  </React.Fragment>
                );
              }}
            </NavLink>
          ))}
        </nav>
      </div>
      <BurgerMenu isOpen={isMenuOpen} links={LINKS} onClose={handleCloseMenu} />
    </header>
  );
};

export default Header;

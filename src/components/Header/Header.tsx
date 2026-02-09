import './Header.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import LINKS from '../../constants/links';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className={`topbar ${isMenuOpen ? 'topbar--menu-open' : ''}`}>
      <div className="topbar__inner">
        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="topbar__burger"
          onClick={handleToggleMenu}
          type="button"
        >
          <span className="topbar__burgerLine" />
          <span className="topbar__burgerLine" />
          <span className="topbar__burgerLine" />
        </button>
        <Logo />
        <nav className="topbar__nav">
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              className={({ isActive }) => `topbar__link ${isActive ? 'is-active' : ''}`}
              to={to}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      <BurgerMenu isOpen={isMenuOpen} links={LINKS} onClose={handleCloseMenu} />
    </header>
  );
};

export default Header;

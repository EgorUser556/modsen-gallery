import './Header.css';

import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';

const Header = () => (
  <header className="topbar">
    <div className="topbar__inner">
      <Logo />
      <nav className="topbar__nav">
        <NavLink
          className={({ isActive }) => `topbar__link ${isActive ? 'is-active' : ''}`}
          to="/category"
        >
          Category
        </NavLink>
        <NavLink
          className={({ isActive }) => `topbar__link ${isActive ? 'is-active' : ''}`}
          to="/images"
        >
          Images
        </NavLink>
        <NavLink
          className={({ isActive }) => `topbar__link ${isActive ? 'is-active' : ''}`}
          to="/favourites"
        >
          Favourites
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Header;

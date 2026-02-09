import './BurgerMenu.css';

import { NavLink } from 'react-router-dom';

import SocialLinks from '../SocialLinks/SocialLinks';

export interface BurgerMenuLink {
  label: string;
  to: string;
}

interface BurgerMenuProps {
  isOpen: boolean;
  links: BurgerMenuLink[];
  onClose: () => void;
}

const BurgerMenu = ({ isOpen, links, onClose }: BurgerMenuProps) => (
  <div className={`burgerMenu ${isOpen ? 'burgerMenu--open' : ''}`}>
    <div className="burgerMenu__content">
      <nav aria-label="Mobile navigation" className="burgerMenu__nav">
        {links.map((l) => (
          <NavLink
            key={l.to}
            className={({ isActive }) => `burgerMenu__link ${isActive ? 'is-active' : ''}`}
            onClick={onClose}
            to={l.to}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
      <div className="burgerMenu__social">
        <SocialLinks />
      </div>
    </div>
  </div>
);

export default BurgerMenu;

import './SocialLinks.css';

import { SOCIAL } from '@constants/icons.ts';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => (
  <div aria-label="Social links" className={`socialLinks ${className}`.trim()}>
    {SOCIAL.map(({ key, icon, label }) => (
      <button
        key={key}
        aria-label={label}
        className="socialLinks__btn"
        onClick={() => {}}
        title={label}
        type="button"
      >
        <img alt="" aria-hidden="true" className="socialLinks__icon" src={icon} />
      </button>
    ))}
  </div>
);

export default SocialLinks;

import './SocialLinks.css';

interface SocialLinksProps {
  className?: string;
}

const SOCIAL = ['fb', 'ig', 'x', 'yt'] as const;

const SocialLinks = ({ className = '' }: SocialLinksProps) => (
  <div aria-label="Social links" className={`socialLinks ${className}`.trim()}>
    {SOCIAL.map((k) => (
      <button
        key={k}
        aria-label={k}
        className="socialLinks__btn"
        onClick={() => {}}
        title={k}
        type="button"
      />
    ))}
  </div>
);

export default SocialLinks;

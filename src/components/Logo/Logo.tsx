import './Logo.css';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => (
  <div className={`logo ${className}`.trim()}>
    <span className="logo__main">MODSEN</span>
    <span className="logo__sub">GALLERY</span>
  </div>
);

export default Logo;

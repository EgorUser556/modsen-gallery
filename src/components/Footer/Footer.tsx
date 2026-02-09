import './Footer.css';

import Logo from '@components/Logo/Logo';
import SocialLinks from '@components/SocialLinks/SocialLinks';
import columns from '@constants/footer';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__left">
        <Logo />
        <p className="footer__text">
          We have images that capture every mood and inspire every vision. From breathtaking
          landscapes to vibrant portraits.
        </p>
        <SocialLinks className="footer__social" />
      </div>

      <div className="footer__cols">
        {columns.map((col) => (
          <div key={col.title} className="footer__col">
            <div className="footer__colTitle">{col.title}</div>
            <div className="footer__colList">
              {col.items.map((t) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a key={t} className="footer__link" href="#">
                  {t}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="footer__bottom">Modsen gallery © 2000-2025, All Rights Reserved</div>
  </footer>
);

export default Footer;

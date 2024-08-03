import Link from 'next/link';
import React from 'react';
import icon_mapwork from '@assets/images/icons/icon_mapmark.svg'
import site_logo_white from '@assets/images/logo/logo-title-dark.png'
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
    const { t } = useTranslation('layout');
  return (
    <footer className="site_footer style_1">
      <div className="footer_widget_area bg_dark_3">
        <div className="container">
          <div className="footer_widget_grid">
            <div className="site_logo">
              <Link className="site_link" href="/">
                <Image src={site_logo_white} style={{ width: "auto", height: "auto" }} alt={t('footer.footer.siteLogoAlt')} />
              </Link>
            </div>
            <div className="footer_widget">
              <h3 className="footer_widget_title">{t('footer.footer.contactUs')}</h3>
              <div className="icon_list_widget">
                <h4 className="widget_title mb-0">
                  {t('footer.footer.getNewIdea')}:
                </h4>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <Link href="mailto:cartoongifts.eu@gmail.com">
                      <span className="list_item_text">
                        cartoongifts.eu@gmail.com
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_widget">
              
            </div>
            <div className="footer_widget">
              <h3 className="footer_widget_title">{t('footer.footer.newsletter')}</h3>
              <form action="#">
                <div className="small_newsletter_form">
                  <input type="email" placeholder={t('footer.footer.emailAddress')} />
                  <button>
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
                <div className="form-check mb-0">
                  <input type="checkbox" id="checkMeOut" />
                  <label htmlFor="checkMeOut">{t('footer.footer.checkMeOut')}</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom bg_dark_3">
        <div className="container">
          <div className="footer_bottom_grid">
            <div className="copyright_widget">
              {t('footer.footer.copyright', { year: new Date().getFullYear() })}
            </div>
            <div className="footer_social">
              <ul className="social_icon unordered_list_end">
                <li><Link href="https://www.facebook.com/cartoongiftsbulgaria1/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://www.instagram.com/cartoongiftsbulgaria/?hl=en/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import blog_details_image_2 from '@assets/images/blogs/blog_details_image_2.jpg'
import blog_details_image_3 from '@assets/images/blogs/blog_details_image_3.jpg'
import avatar_5 from '@assets/images/meta/avatar_5.png'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import BlogSidebarSection from '../blog-sidebar/blog-sidebar';
import useTranslation from 'next-translate/useTranslation';


const DetailsSection = ({ item }) => {

    const { t } = useTranslation('components');
  const [isOpen, setIsOpen] = useState(false);

  const openVideoModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setIsOpen(false)} />
      <section className="details_section blog_details section_space_lg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-lg-8">
              <div className="details_image">
                {item.img && <Image src={item.img.src} width={1170} height={751} style={{ width: "400", height: "100%" }} alt={t('extra-page.blog-details.details-section.blogImageAlt')}  />}
              </div>
              <div className="details_content">
                <div className="blog_post_meta">
                  <ul className="category_list unordered_list">
                    <li><Link href="/blog">{item.blogCat}</Link></li>
                  </ul>
                  <span className="post_date">{item.date}</span>
                </div>
                <h2 className="details_item_title">{item.title}</h2>
                <p>
                    {t('extra-page.blog-details.details-section.blogDetailsContent1')}</p>
                <p>
                    {t('extra-page.blog-details.details-section.blogDetailsContent2')}
                </p>
                <blockquote cite="/blog">
                  <h3 className="blockquote_content">
                    {t('extra-page.blog-details.details-section.blockquoteContent')}
                  </h3>
                  <span className="author_name">{t('extra-page.blog-details.details-section.blockquoteAuthor')}</span>
                </blockquote>
                <p>
                    {t('extra-page.blog-details.details-section.paragraph1')}
                </p>
                <h3 className="details_item_info_title">
                    {t('extra-page.blog-details.details-section.updateExpertsMarketingTools')}
                </h3>
                <p>
                    {t('extra-page.blog-details.details-section.paragraph2')}
                </p>
                <p>
                    {t('extra-page.blog-details.details-section.paragraph3')}
                </p>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="list_item_icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="list_item_text">{t('extra-page.blog-details.details-section.trainingInitiatives')}</span>
                  </li>
                  <li>
                    <span className="list_item_icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="list_item_text">{t('extra-page.blog-details.details-section.continuousLearning')}</span>
                  </li>
                  <li>
                    <span className="list_item_icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="list_item_text">{t('extra-page.blog-details.details-section.digitalOrganization')}</span>
                  </li>
                </ul>
                <div className="row mb-4">
                  <div className="col col-lg-6">
                    <div className="video_widget">
                      <Image src={blog_details_image_2} style={{ width: "100%", height: "100%" }} alt={t('extra-page.blog-details.details-section.videoPosterAlt')} />
                      <button type='submit' className="video_play_icon popup_video" onClick={openVideoModal}>
                        <span className="icon_wrap" data-magnetic>
                          <i className="fas fa-play"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col col-lg-6">
                    <div className="image_wrap">
                      <Image src={blog_details_image_3} style={{ width: "100%", height: "100%" }} alt={t('extra-page.blog-details.details-section.blogDetailsImageAlt')} />
                    </div>
                  </div>
                </div>
                <h3 className="details_item_info_title">{t('extra-page.blog-details.details-section.workforceToDriveLoyaltyTitle')}</h3>
                <p>
                    {t('extra-page.blog-details.details-section.workforceToDriveLoyaltyContent1')}
                </p>
                <p>
                    {t('extra-page.blog-details.details-section.workforceToDriveLoyaltyContent2')}
                </p>
                <div className="social_actions">
                  <ul className="tags_list unordered_list">
                    <li><Link href="/blog">{t('extra-page.blog-details.details-section.tagUIUX')}</Link></li>
                    <li><Link href="/blog">{t('extra-page.blog-details.details-section.tagDevelopment')}</Link></li>
                    <li><Link href="/blog">{t('extra-page.blog-details.details-section.tagDesign')}</Link></li>
                  </ul>
                  <ul className="social_icon unordered_list_end">
                    <li><Link href="https://www.facebook.com/cartoongiftsbulgaria1/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="https://www.instagram.com/cartoongiftsbulgaria/?hl=en" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                  </ul>
                </div>
              </div>

              <div className="post_admin">
                <div className="admin_image">
                  <Image src={avatar_5} style={{ width: "100%", height: "100%" }} alt={t('extra-page.blog-details.details-section.adminImageAlt')} />
                </div>
                <div className="admin_content">
                  <h3 className="admin_name">{t('extra-page.blog-details.details-section.adminName')}</h3>
                  <span className="admin_designation">{t('extra-page.blog-details.details-section.adminDesignation')}</span>
                  <p className="mb-0">
                    {t('extra-page.blog-details.details-section.adminBio')}
                  </p>
                </div>
              </div>

              <h3 className="details_item_title">{t('extra-page.blog-details.details-section.leaveAComment')}</h3>
              <div className="contact_form">
                <form onClick={handleSubmit} action="#">
                  <div className="row">
                    <div className="col col-md-6">
                      <div className="form-group m-0">
                        <input className="form-control" type="text" name="firstname" placeholder={t('extra-page.blog-details.details-section.firstNamePlaceholder')} />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form-group m-0">
                        <input className="form-control" type="text" name="lastname" placeholder={t('extra-page.blog-details.details-section.lastNamePlaceholder')} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <textarea className="form-control" name="comment" placeholder={t('extra-page.blog-details.details-section.commentPlaceholder')}></textarea>
                      </div>

                      <button type="submit" className="bd-btn-link btn_primary">
                        <span className="bd-button-content-wrapper">
                          <span className="bd-button-icon">
                            <i className="fa-light fa-arrow-right-long"></i>
                          </span>
                          <span className="pd-animation-flip">
                            <span className="bd-btn-anim-wrapp">
                              <span className="bd-button-text">{t('extra-page.blog-details.details-section.postCommentButton')}</span>
                              <span className="bd-button-text">{t('extra-page.blog-details.details-section.postCommentButton')}</span>
                            </span>
                          </span>
                        </span>
                      </button>

                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col col-lg-4">
              <BlogSidebarSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsSection;
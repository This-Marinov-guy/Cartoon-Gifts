import Link from 'next/link';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const TermsPrivacySection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="terms_conditions_section section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-lg-3">
            <ul className="nav tabs_nav_boxed unordered_list_block" role="tablist">
              <li role="presentation">
                <button className="active" data-bs-toggle="tab" data-bs-target="#tab_privacy_policy" type="button" role="tab" aria-selected="true">
                  <i className="fas fa-circle"></i>
                  <span>{t('extra-page.privacy-policy-area.privacyPolicy')}</span>
                </button>
              </li>
              <li role="presentation">
                <button data-bs-toggle="tab" data-bs-target="#tab_terms_conditions" type="button" role="tab" aria-selected="false">
                  <i className="fas fa-circle"></i>
                  <span>{t('extra-page.privacy-policy-area.termsConditions')}</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="col col-lg-9">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab_privacy_policy" role="tabpanel">
                <div className="terms_conditions_content">
                  <h3 className="warpper_title">{t('extra-page.privacy-policy-area.privacyPolicyAgreement')}</h3>
                  <p>
                    {t('extra-page.privacy-policy-area.privacyPolicyContent1')}</p>
                  <p>
                    {t('extra-page.privacy-policy-area.privacyPolicyContent2')}</p>
                  <h4 className="info_title">{t('extra-page.privacy-policy-area.mainReasons')}:</h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">{t('extra-page.privacy-policy-area.requiredByLaw')}</span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">{t('extra-page.privacy-policy-area.requiredByThirdParty')}</span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">{t('extra-page.privacy-policy-area.increasesTransparency')}</span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">{t('extra-page.privacy-policy-area.letSSee')}</span>
                    </li>
                  </ul>

                  <h4 className="info_title">{t('extra-page.privacy-policy-area.whatWeCollect')}</h4>
                  <p>
                  {t('extra-page.privacy-policy-area.collectContent1')}
                  </p>
                  <p>
                  {t('extra-page.privacy-policy-area.collectContent2')}
                  </p>

                  <h4 className="info_title">{t('extra-page.privacy-policy-area.questionsComments')}</h4>
                  <p className="mb-1">
                    {t('extra-page.privacy-policy-area.contactInfo')}
                  </p>
                  <p>
                    <Link className="author_mail" href="mailto:howdy@paradox.com">{t('extra-page.privacy-policy-area.emailAddress')}</Link>
                  </p>
                  <h4 className="info_title">{t('extra-page.privacy-policy-area.revisionsPrivacyPolicy')}</h4>
                  <p className="mb-0">
                  {t('extra-page.privacy-policy-area.revisionsContent')}
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_terms_conditions" role="tabpanel">
                <div className="terms_conditions_content">
                  <h3 className="warpper_title">{t('extra-page.privacy-policy-area.termsConditionsAgreement')}</h3>
                  <p>
                  {t('extra-page.privacy-policy-area.termsConditionsContent1')}
                  </p>
                  <p>
                  {t('extra-page.privacy-policy-area.termsConditionsContent2')}
                  </p>
                  <h4 className="info_title">{t('extra-page.privacy-policy-area.mainReasonsTerms')}:</h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text" dangerouslySetInnerHTML={{ __html: t('extra-page.privacy-policy-area.abusiveUsers') }} />
                        {/* <strong> Abusive users:</strong> Terms and Conditions agreements allow you to establish what constitutes appropriate activity on your site or app, empowering you to remove abusive users and content
                      </span> */}
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text" dangerouslySetInnerHTML={{ __html: t('extra-page.privacy-policy-area.intellectualPropertyTheft') }}  />
                        {/* <strong>Intellectual property theft:</strong> Asserting your claim to the creative assets of your site in your terms and conditions will prevent ownership disputes and copyright infringement.
                      </span> */}
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text" dangerouslySetInnerHTML={{ __html: t('extra-page.privacy-policy-area.potentialLitigation') }} />
                        {/* <strong>Potential litigation:</strong> If a user lodges a legal complaint against your business, showing that they were presented with clear terms and conditions before they used your site will help you immensely in court.
                      </span> */}
                    </li>
                  </ul>

                  <h4 className="info_title">{t('extra-page.privacy-policy-area.setLiabilitiesLimits')}</h4>
                  <p>
                  {t('extra-page.privacy-policy-area.liabilitiesLimitsContent')}
                  </p>

                  <h4 className="info_title">{t('extra-page.privacy-policy-area.restrictLiability')}:</h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_text">
                        1. {t('extra-page.privacy-policy-area.inaccuraciesErrors')}
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        2. {t('extra-page.privacy-policy-area.lackOfEnjoyment')}
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        3. {t('extra-page.privacy-policy-area.productDowntime')}
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        4. {t('extra-page.privacy-policy-area.virusesSpywareDamage')}
                      </span>
                    </li>
                  </ul>

                  <h4 className="info_title">{t('extra-page.privacy-policy-area.outlinePolicies')}</h4>
                  <p className="mb-1">
                    {t('extra-page.privacy-policy-area.contactInfo')}
                  </p>
                  <p>
                    <Link className="author_mail" href="mailto:howdy@paradox.com">{t('extra-page.privacy-policy-area.emailAddress')}</Link>
                  </p>
                  <h4 className="info_title">{t('extra-page.privacy-policy-area.revisionsTeamsConditions')}</h4>
                  <p className="mb-0">
                    {t('extra-page.privacy-policy-area.privacyPolicyDynamic')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsPrivacySection;
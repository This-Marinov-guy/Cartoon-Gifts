import Link from 'next/link';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const TermsSonditionSection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="terms_conditions_section section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-lg-3">
            <ul className="nav tabs_nav_boxed unordered_list_block" role="tablist">
              <li role="presentation">
                <button data-bs-toggle="tab" data-bs-target="#tab_privacy_policy" type="button" role="tab" aria-selected="false">
                  <i className="fas fa-circle"></i>
                  <span>{t('extra-page.terms-conditions-area.policyPrivacy')}</span>
                </button>
              </li>
              <li role="presentation">
                <button className="active" data-bs-toggle="tab" data-bs-target="#tab_terms_conditions" type="button" role="tab" aria-selected="true">
                  <i className="fas fa-circle"></i>
                  <span>{t('extra-page.terms-conditions-area.termsConditions')}</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="col col-lg-9">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab_privacy_policy" role="tabpanel">
                <div className="terms_conditions_content">
                  <h3 className="warpper_title">{t('extra-page.terms-conditions-area.privacyPolicyAgreement')}</h3>
                  <p>
                    {t('extra-page.terms-conditions-area.privacyPolicyContent1')} 
                    <Link className="link" href="/service">{t('extra-page.terms-conditions-area.desktopApp')}</Link> 
                    {t('extra-page.terms-conditions-area.privacyPolicyContent2')} 
                  </p>
                  <p>
                    {t('extra-page.terms-conditions-area.privacyPolicyContent3')}
                  </p>
                  <h4 className="info_title">{t('extra-page.terms-conditions-area.mainReasons')}:</h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">{t('extra-page.terms-conditions-area.requiredByLaw')}</span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">{t('extra-page.terms-conditions-area.requiredByThirdPartyServices')}</span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">{t('extra-page.terms-conditions-area.increasesTransparency')}</span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">{t('extra-page.terms-conditions-area.takeALook')}</span>
                    </li>
                  </ul>

                  <h4 className="info_title">{t('extra-page.terms-conditions-area.whatWeCollect')}</h4>
                  <p>
                    {t('extra-page.terms-conditions-area.apartFromGoverningLaws')} 
                    <Link className="link" href="/faq">{t('extra-page.terms-conditions-area.googleRequireWebsite')}</Link> 
                    {t('extra-page.terms-conditions-area.privacyPolicyContent4')} 
                  </p>
                  <p>
                  {t('extra-page.terms-conditions-area.privacyPolicyContent5')}
                  </p>

                  <h4 className="info_title">{t('extra-page.terms-conditions-area.questionsComments')}</h4>
                  <p className="mb-1">
                    {t('extra-page.terms-conditions-area.youMayDirectQuestions')}:
                  </p>
                  <p>
                    <Link className="author_mail" href="mailto:howdy@paradox.com">howdy@paradox.com</Link>
                  </p>
                  <h4 className="info_title">{t('extra-page.terms-conditions-area.revisionsToPrivacyPolicy')}</h4>
                  <p className="mb-0">
                    {t('extra-page.terms-conditions-area.privacyPolicyDynamic')}
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_terms_conditions" role="tabpanel">
                <div className="terms_conditions_content">
                  <h3 className="warpper_title">{t('extra-page.terms-conditions-area.termsAndConditionsAgreement')}</h3>
                  <p>
                    {t('extra-page.terms-conditions-area.termsAndConditionsContent1')} 
                    <Link className="link" href="/contact">{t('extra-page.terms-conditions-area.contractBetween')}</Link>. 
                    {t('extra-page.terms-conditions-area.termsAndConditionsContent2')}
                  </p>
                  <p>
                    {t('extra-page.terms-conditions-area.termsAndConditionsContent3')}
                  </p>
                  <h4 className="info_title">{t('extra-page.terms-conditions-area.mainReasonsTerms')}:</h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong> {t('extra-page.terms-conditions-area.abusiveUsersTitle')}:</strong> {t('extra-page.terms-conditions-area.abusiveUsersContent')}
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong>{t('extra-page.terms-conditions-area.intellectualPropertyTheftTitle')}:</strong> {t('extra-page.terms-conditions-area.intellectualPropertyTheftContent')}
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong>{t('extra-page.terms-conditions-area.potentialLitigationTitle')}:</strong> {t('extra-page.terms-conditions-area.potentialLitigationContent')}
                      </span>
                    </li>
                  </ul>

                  <h4 className="info_title">{t('extra-page.terms-conditions-area.toSetLiabilitiesLimits')}</h4>
                  <p>
                  {t('extra-page.terms-conditions-area.almostEveryTermsAndConditionsAgreement')} 
                  <Link className="link" href="/policy-privacy">{t('extra-page.terms-conditions-area.whatClauses')}</Link>, {t('extra-page.terms-conditions-area.termsAndConditionsContent4')}
                  </p>

                  <h4 className="info_title">{t('extra-page.terms-conditions-area.mostCompaniesRestrict')}</h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_text">
                        1. {t('extra-page.terms-conditions-area.inaccuraciesErrors')}
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        2. {t('extra-page.terms-conditions-area.lackOfEnjoyment')}
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        3. {t('extra-page.terms-conditions-area.productOrWebsiteDowntime')}
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        4. {t('extra-page.terms-conditions-area.virusesSpyware')}
                      </span>
                    </li>
                  </ul>

                  <h4 className="info_title">{t('extra-page.terms-conditions-area.toOutlinePolicies')}</h4>
                  <p className="mb-1">
                  {t('extra-page.terms-conditions-area.youMayDirectQuestions')}:
                  </p>
                  <p>
                    <Link className="author_mail" href="mailto:howdy@paradox.com">howdy@paradox.com</Link>
                  </p>
                  <h4 className="info_title">{t('extra-page.terms-conditions-area.revisionsToTeamsCondition')}</h4>
                  <p className="mb-0">
                    {t('extra-page.terms-conditions-area.privacyPolicyDynamic')}
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

export default TermsSonditionSection;
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const CommonQuetion = () => {
    const { t } = useTranslation('components');
  return (
    <section className="common_question_section section_space_heading bg_light">
      <div className="container">
        <div className="section_heading text-center mb-3">
          <h3 className="heading_title mb-0">
            {t('extra-page.fq-question.common-question.title')}
          </h3>
        </div>

        <div className="row">
          <div className="col col-lg-6">
            <div className="iconbox_item">
              <h3 className="item_title">{t('extra-page.fq-question.common-question.q1Title')}</h3>
              <p className="mb-0">
                {t('extra-page.fq-question.common-question.q1Answer')}
              </p>
            </div>
            <div className="iconbox_item">
              <h3 className="item_title">{t('extra-page.fq-question.common-question.q2Title')}</h3>
              <p className="mb-0">
                {t('extra-page.fq-question.common-question.q2Answer')}
              </p>
            </div>
            <div className="iconbox_item">
              <h3 className="item_title">{t('extra-page.fq-question.common-question.q3Title')}</h3>
              <p className="mb-0">
                {t('extra-page.fq-question.common-question.q3Answer')}
              </p>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="iconbox_item">
              <h3 className="item_title">{t('extra-page.fq-question.common-question.q4Title')}</h3>
              <p className="mb-0">
                {t('extra-page.fq-question.common-question.q4Answer')}
              </p>
            </div>
            <div className="iconbox_item">
              <h3 className="item_title">{t('extra-page.fq-question.common-question.q5Title')}</h3>
              <p className="mb-2">
                {t('extra-page.fq-question.common-question.q5Answer')}
              </p>
              <ul className="unordered_list_block">
                {t('extra-page.fq-question.common-question.q5Reasons', { returnObjects: true }).map((reason, index) => (
                  <li key={index}>• {reason}</li>
                ))}
                {/* <li>• Spelling and grammatical errors</li>
                <li>• Capitalisation issues</li>
                <li>• Copyright/Trademark infringement</li>
                <li>• Unnecessary repetition</li> */}
              </ul>
            </div>
            <div className="iconbox_item">
              <h3 className="item_title">{t('extra-page.fq-question.common-question.q6Title')}</h3>
              <p className="mb-0">
                {t('extra-page.fq-question.common-question.q6Answer')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonQuetion;
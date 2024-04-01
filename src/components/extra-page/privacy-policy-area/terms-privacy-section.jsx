import Link from 'next/link';
import React from 'react';

const TermsPrivacySection = () => {
  return (
    <section className="terms_conditions_section section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-lg-3">
            <ul className="nav tabs_nav_boxed unordered_list_block" role="tablist">
              <li role="presentation">
                <button className="active" data-bs-toggle="tab" data-bs-target="#tab_privacy_policy" type="button" role="tab" aria-selected="true">
                  <i className="fas fa-circle"></i>
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li role="presentation">
                <button data-bs-toggle="tab" data-bs-target="#tab_terms_conditions" type="button" role="tab" aria-selected="false">
                  <i className="fas fa-circle"></i>
                  <span>Terms & Conditions</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="col col-lg-9">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab_privacy_policy" role="tabpanel">
                <div className="terms_conditions_content">
                  <h3 className="warpper_title">Privacy Policy Agreement</h3>
                  <p>
                    Companies or websites that handle customer information are required by law and third parties to publish their Privacy Policies on their business websites. If you own a website, web app, mobile app or <Link className="link" href="/service">desktop app</Link> that collects or processes user data, you most certainly will have to post a Privacy Policy on your website (or give in-app access to the full Privacy Policy agreement).
                  </p>
                  <p>
                    Privacy is not a new concept. Humans have always desired privacy in their social as well as private lives. But the idea of privacy as a human right is a relatively modern phenomenon.
                  </p>
                  <h4 className="info_title">Here are some of the main reasons:</h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">Required by the law</span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">Required by third party services</span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">Increases Transparency</span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">{`Let's`} take a look at each of these reasons in more depth.</span>
                    </li>
                  </ul>

                  <h4 className="info_title">What we collect</h4>
                  <p>
                    Apart from governing laws, some websites like Apple, Amazon, and <Link className="link" href="/terms-conditions">Google require website</Link> and app owners to post a Privacy Policy agreement if they use any of their services. Many websites and apps use in-page/in-app advertising by third parties to generate revenue. As these ads also collect user data, third parties require the websites or apps to ask their users permission for sharing their personal data.
                  </p>
                  <p>
                    Some of the most popular third party services require website and app owners to post Privacy Policy agreements on their websites. Some of these services include:
                  </p>

                  <h4 className="info_title">Questions, comments, or report of incidents</h4>
                  <p className="mb-1">
                    You may direct questions, comments or reports to:
                  </p>
                  <p>
                    <Link className="author_mail" href="mailto:howdy@paradox.com">howdy@paradox.com</Link>
                  </p>
                  <h4 className="info_title">Revisions to this privacy policy without notice</h4>
                  <p className="mb-0">
                    This Privacy Policy is dynamic. It will continually change. You may not assume that it remains the same and you agree to check the policy each time you visit the site for changes. Unless, in the sole opinion of the website, this policy changes so drastically as to suggest a posted notification on the site or via email, you will receive no notification of changes to this Privacy Policy nor, under any circumstances, does this site promise notification. Your continued use of this site always evidences your acceptance of the terms this Privacy Policy or any modifications.
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_terms_conditions" role="tabpanel">
                <div className="terms_conditions_content">
                  <h3 className="warpper_title">Terms and Conditions Agreement</h3>
                  <p>
                    A terms and conditions agreement outlines the website administrator’s rules regarding user behaviour and provides information about the actions the website administrator can and will perform. Essentially, your terms and conditions text is a <Link className="link" href="/terms-conditions">contract between your website and its users</Link>. In the event of a legal dispute, arbitrators will look at it to determine whether each party acted within their rights.
                  </p>
                  <p>
                    Condition is not a new concept. Humans have always desired privacy in their social as well as private lives. But the idea of privacy as a human right is a relatively modern phenomenon.
                  </p>
                  <h4 className="info_title">Here are some of the main reasons:</h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong> Abusive users:</strong> Terms and Conditions agreements allow you to establish what constitutes appropriate activity on your site or app, empowering you to remove abusive users and content
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong>Intellectual property theft:</strong> Asserting your claim to the creative assets of your site in your terms and conditions will prevent ownership disputes and copyright infringement.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-circle"></i>
                      </span>
                      <span className="list_item_text">
                        <strong>Potential litigation:</strong> If a user lodges a legal complaint against your business, showing that they were presented with clear terms and conditions before they used your site will help you immensely in court.
                      </span>
                    </li>
                  </ul>

                  <h4 className="info_title">To Set Liabilities Limits</h4>
                  <p>
                    Almost every terms and conditions agreement has a warranty or limitations of liability disclaimer. We’ll cover it in more detail in our section about <Link className="link" href="/terms-conditions">what clauses to include in your terms and conditions</Link>, but this clause essentially limits what customers can hold you liable for.
                  </p>

                  <h4 className="info_title">Most companies restrict liability for:</h4>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_text">
                        1. Inaccuracies and errors
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        2. Lack of enjoyment
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        3. Product or website downtime
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        4. Viruses, spyware, and product damage
                      </span>
                    </li>
                  </ul>

                  <h4 className="info_title">To Outline Policies and Avoid Abusive Behavior</h4>
                  <p className="mb-1">
                    You may direct questions, comments or reports to:
                  </p>
                  <p>
                    <Link className="author_mail" href="mailto:howdy@paradox.com">howdy@paradox.com</Link>
                  </p>
                  <h4 className="info_title">Revisions to this Teams & Condition without Notice</h4>
                  <p className="mb-0">
                    This Privacy Policy is dynamic. It will continually change. You may not assume that it remains the same and you agree to check the policy each time you visit the site for changes. Unless, in the sole opinion of the website, this policy changes so drastically as to suggest a posted notification on the site or via email, you will receive no notification of changes to this Privacy Policy nor, under any circumstances, does this site promise notification. Your continued use of this site always evidences your acceptance of the terms this Privacy Policy or any modifications.
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
import Search from "@svg/search";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const SearchArea = () => {
    const { t } = useTranslation("components");
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className="search__result-area grey-bg-4 pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="search__result-wrapper">
              <div className="search__result-content text-center mb-40">
                <h3 className="search__result-title">
                  {t('search.searchResultsFor')} <span> {t('search.query')}</span>
                </h3>
                <p>{t('search.queryResultDescription')}</p>
              </div>
              <div className="search__result-form">
                <form onSubmit={handleSubmit}>
                  <div className="search__result-input-box">
                    <div className="search__result-input">
                      <span>
                        <Search/>
                      </span>
                      <input type="text" placeholder={t('search.searchPlaceholder')} />
                    </div>
                    <button type="submit" className="tp-btn">
                      {t('search.searchButtonText')}
                    </button>
                  </div>
                  <div className="search__result-tags">
                    <a href="#">{t('search.technology')}Technology</a>
                    <a href="#">{t('search.business')}Business</a>
                    <a href="#">{t('search.travel')}Travel</a>
                    <a href="#">{t('search.personality')}Personality</a>
                    <a href="#">{t('search.nature')}Nature</a>
                    <a href="#">{t('search.photographer')}Photographer</a>
                    <a href="#">{t('search.agency')}Agency</a>
                    <a href="#">{t('search.lifeStyle')}Life Style</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchArea;

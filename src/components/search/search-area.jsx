import Search from "@svg/search";
import React from "react";

const SearchArea = () => {
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
                  Search results for: <span> “hello”</span>
                </h3>
                <p>Harry found 46 results for your search query.</p>
              </div>
              <div className="search__result-form">
                <form onSubmit={handleSubmit}>
                  <div className="search__result-input-box">
                    <div className="search__result-input">
                      <span>
                        <Search/>
                      </span>
                      <input type="text" placeholder="Search for articles..." />
                    </div>
                    <button type="submit" className="tp-btn">
                      Search
                    </button>
                  </div>
                  <div className="search__result-tags">
                    <a href="#">Technology</a>
                    <a href="#">Business</a>
                    <a href="#">Travel</a>
                    <a href="#">Personality</a>
                    <a href="#">Nature</a>
                    <a href="#">Photographer</a>
                    <a href="#">Agency</a>
                    <a href="#">Life Style</a>
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

import React from 'react';
import icon_search from '@assets/images/icons/icon_search_white.svg'
import Image from 'next/image';

const BlogSearch = () => {
    return (
        <div className="sidebar_widget">
            <h3 className="widget_title">
                Search
            </h3>
            <div className="form-group kyeword_search_form mb-0">
                <input className="form-control" type="search" name="search" placeholder="Enter Kyeword" />
                <button type="submit">
                    <Image src={icon_search} style={{ width: "auto", height: "auto" }} alt="Paradox Search Icon" />
                </button>
            </div>
        </div>
    );
};

export default BlogSearch;
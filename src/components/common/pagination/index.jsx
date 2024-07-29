import Link from 'next/link';
import React from 'react';

const Pagination_Data = ({ wrapClass, navClass, currentPage, totalPages }) => {
    return (
        <div className={`${wrapClass ? wrapClass : "pagination_wrap"}`}>
            <ul className={`${navClass ? navClass : "pagination_nav unordered_list_center"}`}>
                <li><Link href={`#${currentPage - 1}`}><i className="far fa-angle-left"></i></Link></li>
                {[1, 2, 3, 4, 5].map((index) => {
                    <li key={index} className={index === currentPage && "active"}><Link href={`#${index}`}>{index}</Link></li>
                })}
                <li><Link href={`#${currentPage + 1}`}><i className="far fa-angle-right"></i></Link></li>
            </ul>
        </div>
    );
};

export default Pagination_Data;
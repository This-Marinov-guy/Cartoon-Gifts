import Link from 'next/link';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const TagList = () => {
    const { t } = useTranslation('components');
    return (
        <div className="sidebar_widget">
            <h3 className="widget_title">
                {t('extra-page.blog-sidebar.tag-list.tagsList')}
            </h3>
            <ul className="tags_list unordered_list">
                <li><Link href="/blog">{t('extra-page.blog-sidebar.tag-list.business')}</Link></li>
                <li><Link href="/blog">{t('extra-page.blog-sidebar.tag-list.uiux')}</Link></li>
                <li><Link href="/blog">{t('extra-page.blog-sidebar.tag-list.development')}</Link></li>
                <li><Link href="/blog">{t('extra-page.blog-sidebar.tag-list.design')}</Link></li>
                <li><Link href="/blog">{t('extra-page.blog-sidebar.tag-list.programming')}</Link></li>
                <li><Link href="/blog">{t('extra-page.blog-sidebar.tag-list.social')}</Link></li>
            </ul>
        </div>
    );
};

export default TagList;
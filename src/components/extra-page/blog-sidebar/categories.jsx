import Link from 'next/link';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Categories = () => {
    const { t } = useTranslation('components');
    return (
        <div className="sidebar_widget">
            <h3 className="widget_title">
                {t('categories')}
            </h3>
            <ul className="icon_list unordered_list_block">
                <li>
                    <Link href="/blog">{t('marketing')}</Link>
                </li>
                <li>
                    <Link href="/blog">{t('digitalAgency')}</Link>
                </li>
                <li>
                    <Link href="/blog">{t('creativeAgency')}</Link>
                </li>
                <li>
                    <Link href="/blog">{t('businessConsulting')}</Link>
                </li>
                <li>
                    <Link href="/blog">{t('itSolution')}</Link>
                </li>
            </ul>
        </div>
    );
};

export default Categories;
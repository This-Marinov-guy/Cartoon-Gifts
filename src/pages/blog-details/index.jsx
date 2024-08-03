import BlogDetailsArea from '@components/extra-page/blog-details';
import SEO from '@components/seo';
import blogs_data from '@data/blogs-data';
import Wrapper from '@layout/wrapper';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('pages')
    const item = blogs_data[0]
    return (
        <Wrapper>
            <SEO pageTitle={t('blog-details.title')} />
            <BlogDetailsArea item={item} />
        </Wrapper>
    );
};

export default Index;
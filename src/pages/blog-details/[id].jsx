import BlogDetailsArea from '@components/extra-page/blog-details';
import SEO from '@components/seo';
import blogs_data from '@data/blogs-data';
import Wrapper from '@layout/wrapper';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

const BlogDetails = () => {
    const router = useRouter();
    const id = router.query.id;
    const {t} = useTranslation('pages')
    const [news, setNews] = useState({});

    useEffect(() => {
        if (!id) (<h1>{t('blog-details.loading')}...</h1>)

        else (setNews(blogs_data.find(item => item.id == id)))

        return () => {};
    }, [id]);


    return (
        <Wrapper>
            <SEO pageTitle={t('blog-details.title')} />
            <BlogDetailsArea item={news} />
        </Wrapper>
    );
};

export default BlogDetails;
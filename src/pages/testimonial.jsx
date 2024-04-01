import TestimonialMainArea from '@components/extra-page/testimonial';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Testimonial'} />
            <TestimonialMainArea />
        </Wrapper>
    );
};

export default Index;
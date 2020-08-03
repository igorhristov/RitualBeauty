import React from 'react';
import InnerHeader from '../../components/innerHeader/innerHeader.component';

import ScrollToTopOnMount from '../../components/autoToTopScroll/scrollToTop';

const ContactPage = () => (
    <>
        <ScrollToTopOnMount />
        <InnerHeader title='Контакт' subtitle='Каде може да не најдете' />
        <h1 className='text-center'>Contact Page</h1>
    </>
);

export default ContactPage;

import React from 'react';

import depilationsData from '../../data/depilations';

import InnerHeader from '../../components/innerHeader/innerHeader.component';
import UslugiCard from '../../components/uslugiCard/uslugiCards.component';

import ScrollToTopOnMount from '../../components/autoToTopScroll/scrollToTop';

const ServicesPage = () => {
    return (
        <div style={{ background: '#F6F6F6' }}>
            <ScrollToTopOnMount />
            <InnerHeader title='Депилација' subtitle='Нашите Третмани' />

            <div className='container'>
                <div className='row'>
                    {depilationsData.map(({ id, imgUrl, body, title, spic }) => (
                        <div className='col-md-4 col-sm-6 d-flex align-items-stretch mb-5' key={id}>
                            <UslugiCard {...{ id, imgUrl, body, title, spic }} linkUrl='depilations' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;

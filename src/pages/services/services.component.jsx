import React from 'react';

import data from '../../data/data';

import InnerHeader from '../../components/innerHeader/innerHeader.component';
import ServicesCard from '../../components/services-card/services-card';

const ServicesPage = () => {

    return (
        <>
            <InnerHeader title='Услуги' subtitle='Нашите Третмани' />

            <div className='container'>
                <div className='row'>
                    {data.map(({ id, imgUrl, body, title }) => (
                        <div className='col-md-4 col-sm-6 d-flex align-items-stretch mb-5' key={id}>
                            <ServicesCard {...{ id, imgUrl, body, title }} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ServicesPage;

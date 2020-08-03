import React from 'react';
import { useParams } from 'react-router-dom';
import makeupsdata from '../../data/makeups';

import InnerHeader from '../../components/innerHeader/innerHeader.component';

import ScrollToTopOnMount from '../../components/autoToTopScroll/scrollToTop';

const MakeupServicePage = () => {
    const serviceId = useParams();
    const myService = makeupsdata.find((service) => service.id === serviceId.id);
    return (
        <div style={{ background: '#F6F6F6' }}>
            <ScrollToTopOnMount />
            <InnerHeader title='Шминка' subtitle={myService.title} />

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <h2 style={{ color: '#EC4090' }} className='text-center'>
                            {myService.title}
                        </h2> */}
                        <div className='mb-4'>
                            {myService.body.map((item) => (
                                <p className='px-lg-5 m-1 ' key={item}>
                                    {item}
                                </p>
                            ))}
                        </div>
                        <div className='gallery pb-5 text-center '>
                            {myService.gallery.map((image) => (
                                <img
                                    style={{ maxWidth: '100%', padding: '5px' }}
                                    key={image}
                                    alt='makups'
                                    src={require(`../../assets/images/${image}`)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeupServicePage;

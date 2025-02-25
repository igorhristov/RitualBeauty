import React from 'react';
import { useParams } from 'react-router-dom';
import depilationData from '../../data/depilations';

import InnerHeader from '../../components/innerHeader/innerHeader.component';
import ScrollToTopOnMount from '../../components/autoToTopScroll/scrollToTop';

const MakeupServicePage = () => {
    const serviceId = useParams();
    const myService = depilationData.find((service) => service.id === serviceId.id);
    return (
        <div style={{ background: '#F6F6F6' }}>
            <ScrollToTopOnMount />
            <InnerHeader title='Депилација' subtitle={myService.title} />

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
                        <div className='cards pb-5 text-center'>
                            {myService.gallery.map((image) => (
                                <img
                                    alt='makups'
                                    key={image}
                                    style={{ maxWidth: '100%', padding: '5px' }}
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

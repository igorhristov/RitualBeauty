import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data';

import InnerHeader from '../../components/innerHeader/innerHeader.component';

const ServicePage = () => {
    
    const serviceId = useParams();
     const myService = data.find((service) => service.id === serviceId.id);

    return (
        <>
            <InnerHeader title='Третман' subtitle={myService.title} />

            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 style={{ color: '#EC4090' }} className='text-center'>
                            {myService.title}
                        </h2>
                        <div>
                            {myService.body.map((item, ix) => (
                                <p key={ix}>{item}</p>
                            ))}
                        </div>
                        <div className='text-center pb-5'>
                            <img className='w-100' alt='service ' src={require(`../../assets/images/${myService.imgUrl}`)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicePage;

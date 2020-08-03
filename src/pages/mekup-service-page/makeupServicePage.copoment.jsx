import React from 'react';
import { useParams } from 'react-router-dom';
import makeupsdata from '../../data/makeup/makeups';

import InnerHeader from '../../components/innerHeader/innerHeader.component';

const MakeupServicePage = () => {
    const serviceId = useParams();
    console.log(serviceId);
    const myService = makeupsdata.filter((service) => service.id === serviceId.id);

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
                            {myService.body}
                        </div>
                        <div className='text-center pb-5'>
                            <img
                                className='w-100'
                                alt='service '
                                src={require(`../../assets/images/${myService.imgUrl}`)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MakeupServicePage;

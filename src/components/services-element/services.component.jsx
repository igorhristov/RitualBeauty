import React from 'react';
import './services.styles.css';

import SectionTitle from '../section-title/sectionTitle.component';
// import CustomButton from '../Button/Button.Component';
import ServiceCardElement from './service.card/service.card.component';

const Services = () => (
    <section id='about' className='services'>
        <SectionTitle
            title={'УСЛУГИ КОИ ГИ НУДИМЕ'}
            body={`Нашиот центар за убавина ги задоволува стандардите на најдобрите салони во светските метрополи. Идејата ни беше да создадеме рај за Вашите сетила.`}
        />

        <div className='service-content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-6 d-flex align-items-stretch mb-5'>
                        <ServiceCardElement
                            imgUrl={
                                'https://media.glamour.com/photos/59cbdd6abab6bd37bd67168e/master/w_822,h_715,c_limit/goals.makeups.jpg'
                            }
                            title={'Козметика и шминки'}
                            body={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh'}
                            link={'makeups'}
                        />
                    </div>
                    <div className='col-md-4 col-sm-6 d-flex align-items-stretch mb-5'>
                        <ServiceCardElement
                            imgUrl={
                                'https://www.stylist.co.uk/images/app/uploads/2020/04/29122843/how-to-cut-your-own-hair-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'
                            }
                            title={'Флизерски Услуги'}
                            body={
                                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm dsaf sadf asdf sadf y nibh'
                            }
                            link={''}
                        />
                    </div>
                    <div className='col-md-4 col-sm-6 d-flex align-items-stretch mb-5'>
                        <ServiceCardElement
                            imgUrl={
                                'https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/1c/62/b6/1c62b6b9-6d3a-380e-ddaf-66001cc06086/source/256x256bb.jpg'
                            }
                            title={'Маникир и педикир'}
                            body={
                                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm dsaf sadf asdf sadf y nibh'
                            }
                            link={''}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Services;

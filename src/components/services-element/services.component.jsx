import React from 'react';
import './services.styles.css';

import SectionTitle from '../section-title/sectionTitle.component';


const Services = () => (
    <section id='about' className='services'>
        <SectionTitle
            title={'УСЛУГИ КОИ ГИ НУДИМЕ'}
            body={`Нашиот центар за убавина ги задоволува стандардите на најдобрите салони во светските метрополи. Идејата ни беше да создадеме рај за Вашите сетила.`}
        />

        <div className='service-content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-3'>
                        <div className='service-card'>
                            <div className='service-img'>
                                <img
                                    src='https://media.glamour.com/photos/59cbdd6abab6bd37bd67168e/master/w_822,h_715,c_limit/goals.makeups.jpg'
                                    alt='flag'
                                />
                            </div>
                            <h3>branding</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-3'>
                        <div className='service-card'>
                            <div className='service-img'>
                                <img
                                    src='https://mlpqmmkxmvnb.i.optimole.com/4rw14Ms-G6Zwdocg/w:auto/h:auto/q:auto/https://christmasmakeups.com/wp-content/uploads/2019/12/67200327_662337284176768_3221218093246185472_n.jpg'
                                    alt='flag'
                                />
                            </div>
                            <h3>design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-3'>
                        <div className='service-card'>
                            <div className='service-img'>
                                <img
                                    src='https://mlpqmmkxmvnb.i.optimole.com/4rw14Ms-G6Zwdocg/w:auto/h:auto/q:auto/https://christmasmakeups.com/wp-content/uploads/2019/12/67200327_662337284176768_3221218093246185472_n.jpg'
                                    alt='flag'
                                />
                            </div>
                            <h3>Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-3'>
                        <div className='service-card'>
                            <div className='service-img'>
                                <img
                                    className=''
                                    src='https://mlpqmmkxmvnb.i.optimole.com/4rw14Ms-G6Zwdocg/w:auto/h:auto/q:auto/https://christmasmakeups.com/wp-content/uploads/2019/12/67200327_662337284176768_3221218093246185472_n.jpg'
                                    alt='flag'
                                />
                            </div>
                            <h3>ROCKET SCIENCE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Services;

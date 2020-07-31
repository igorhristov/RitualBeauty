import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// import CustomButton from '../Button/Button.Component';
import CarouselData from './CarouselData';

import './carousel.styles.css';

const CarouselComponent = () => (
    <Carousel style={{ marginTop: '80px', height: '50%' }} fade className='carousel-component'>
        {CarouselData.map((item) => (
            <Carousel.Item className=''>
                <img className='w-100'  fluid src={item.imgUrl} alt={item.imgAlt} />
                <Carousel.Caption className='carousel-caption d-none  d-md-block'>
                    {/* <h3 style={{ fontSize: '1.5rem' }} >
                        {item.title}
                    </h3> */}
                    <h3 className='p-0 my-1'>{item.body}</h3>
                    {/* <CustomButton title='Повеќе' cssClass={'text-uppercase py-1 d-block mx-auto'} /> */}
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
);

export default CarouselComponent;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import CustomButton from '../Button/Button.Component';
import CarouselData from './CarouselData';

import './carousel.styles.css';

const CarouselComponent = () => (
    <Carousel style={{ marginTop: '80px', height: '50%' }} fade className='carousel-component'>
        {CarouselData.map((item) => (
            <Carousel.Item className=''>
                <img style={{ width: '100%' }} className='d-block  ' src={item.imgUrl} alt={item.imgAlt} />
                <Carousel.Caption
                    className='carousel-caption d-none  d-sm-inline-block'
                    style={{
                      
                        top: '50%',
                        transform: 'translateY(-50%)',
                        // backgroundColor: 'rgba(0,0,0,0.1)',
                        maxWidth: '40%',
                    }}
                >
                    <h3 style={{ fontSize: '1.5rem' }} >
                        {item.title}
                    </h3>
                    <p className='p-0 my-1'>{item.body}</p>
                    <CustomButton title='Повеќе' cssClass={'text-uppercase py-1 d-block mx-auto'} />
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
);

export default CarouselComponent;

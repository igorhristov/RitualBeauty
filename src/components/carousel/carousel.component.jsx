import React from 'react';
import { Carousel } from 'react-bootstrap';

// import CustomButton from '../Button/Button.Component';
import CarouselData from './CarouselData';

import './carousel.styles.css';

const CarouselComponent = () => (
    <Carousel style={{ marginTop: '80px', height: '50%' }}  className='carousel-component'>
        {CarouselData.map((item) => (
                <Carousel.Item key={item.title}>
                    <img className='w-100' src={item.imgUrl} alt={item.imgAlt} />
                    <Carousel.Caption style={{width:'350px'}} className='carousel-caption d-none mx-auto  d-md-block'>
                    {/* <h3 style={{ fontSize: '1.5rem' }} >
                        {item.title}
                    </h3> */}
                    <h3 className="py-2">{item.body}</h3>
                </Carousel.Caption>
                </Carousel.Item>
        ))}
    </Carousel>
);

export default CarouselComponent;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';
import CustomButton from '../Button/Button.Component';

import './carousel.styles.css';

const CarouselComponent = () => (
    <Carousel style={{ marginTop: '80px' }} fade className='carousel-component'>
        <Carousel.Item>
            <img className='d-block w-100' src={image1} alt='First slide' />
            <Carousel.Caption className='text-left pt-0 pt-lg-5'>
                <h3>КОСА</h3>
                <p>СТИЛ/ТРЕНД/НОВОСТИ</p>
                <CustomButton title='Read More' />
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100' src={image2} alt='Third slide' />

            <Carousel.Caption className='text-left pt-0 pt-lg-5'>
                <h3>ЛИЦЕ</h3>
                <p>БЕСПРЕКОРНОСТ И УБАВИНА</p>
                <CustomButton title='Read More' />
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100' src={image3} alt='Third slide' />

            <Carousel.Caption className='text-left pt-0 pt-lg-5'>
                <h3>ТЕЛО</h3>
                <p>ЛИНИЈА,НЕГА И ЗДРАВЈЕ</p>
                <CustomButton title='Read More' />
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default CarouselComponent;

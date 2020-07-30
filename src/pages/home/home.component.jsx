import React from 'react';
import CarouselComponent from '../../components/carousel/carousel.component';
import ParallaxComponent from '../../components/parallax/parallax.component';
import Testemonial from '../../components/testemonial/testemonial.component';
import Services from '../../components/services-element/services.component';

const HomePage = () => (
    <>
        <CarouselComponent />
        <Services />
        <ParallaxComponent />
        <Testemonial />
    </>
);

export default HomePage;

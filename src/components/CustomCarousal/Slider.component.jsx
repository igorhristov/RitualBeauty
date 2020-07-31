import React, { useState } from 'react';
import './Slider.styles.css';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';

import ImgComp from './ImgComp/ImgComponent';

const Slider = () => {
    let sliderArr = [<ImgComp src={image1} />, <ImgComp src={image2} />, <ImgComp src={image3} />];
    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className='slider'>
            {sliderArr.map((item, ix) => (
                <div className='slide' key={ix} style={{ transform: `translateX(${x}%)` }}>
                    {item}
                </div>
            ))}
            <button className='btn-styles' id='goLeft' onClick={goLeft}>
                left
            </button>
            <button className='btn-styles' id='goRight' onClick={goRight}>
                right
            </button>
        </div>
    );
};

export default Slider;

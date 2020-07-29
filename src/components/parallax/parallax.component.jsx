import * as React from 'react';
import './parallax.styles.css';

import CustomButton from '../Button/Button.Component';

export default function Parallax() {
    return (
        <div className='parallax  text-center'>
            <div className='parallax-content '>
                <h2 className='text-light text-uppercase'>ТРЕТМАНИ ЗА ТЕЛО</h2>
                <p className='text-center px-5 text-light mx-auto lead text-secondary'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis
                    commodo augue. Aliquam ornare hendrerit augue. Cras tellus. In pulvinar lectus a est. Curabitur eget
                    orci. Cras laoreet ligula. Etiam sit amet dolor. Vestibulum
                </p>
                <CustomButton title='Read More' />
            </div>
        </div>
    );
}

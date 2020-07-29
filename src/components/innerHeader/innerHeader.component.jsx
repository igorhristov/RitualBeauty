import React from 'react';
import './innerHeader.styles.css';
const InnerHeader = ({ title, subtitle }) => {
    return (
        <section className='header-inner w-100 mb-5'>
            <div className='inner text-center'>
                <h4 className='title text-white text-uppercase'>{title}</h4>
                <h5 className='text-white text-uppercase'>{subtitle}</h5>
            </div>
        </section>
    );
};

export default InnerHeader;

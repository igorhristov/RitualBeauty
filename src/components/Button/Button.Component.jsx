import React from 'react';
import Button from 'react-bootstrap/Button';

const CustomButton = ({ title }) => (
    <Button variant='outline-danger' className='ServicesButton'>
        {title}
    </Button>
);

export default CustomButton;

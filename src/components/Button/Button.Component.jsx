import React from 'react';
import Button from 'react-bootstrap/Button';

const CustomButton = ({ title, cssClass }) => (
    <Button variant='outline-danger' className={`${cssClass} ServicesButton`}>
        {title}
    </Button>
);

export default CustomButton;

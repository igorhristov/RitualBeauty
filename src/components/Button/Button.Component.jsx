import React from 'react';
import Button from 'react-bootstrap/Button';

import './Button.Styles.css'

const CustomButton = ({ title, cssClass }) => (
    <Button variant='outline-danger' className={`${cssClass} ServicesButton`}>
        {title}
    </Button>
);

export default CustomButton;

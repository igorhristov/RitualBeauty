import React from 'react';
import Button from 'react-bootstrap/Button';

import './Button.Styles.css'

const CustomButton = ({ cssClass }) => (
    <Button variant='outline-danger' className={`lead ${cssClass} ServicesButton`}>
      Прочитај повеќе &#xbb;
    </Button>
);

export default CustomButton;

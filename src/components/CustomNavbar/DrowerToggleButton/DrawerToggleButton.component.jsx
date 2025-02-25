import React from 'react';

import './DrawerToggleButton.Styles.css';

const drawerToggleButton = (props) => (
    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button-line' />
        <div className='toggle-button-line' />
        <div className='toggle-button-line' />
    </button>
);

export default drawerToggleButton;

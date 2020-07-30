import React from 'react';
import { Link } from 'react-router-dom';

import MainMenu from '../MainMenu';

import DrawerToggleButton from '../DrowerToggleButton/DrawerToggleButton.component';
import './Toolbar.Styles.css';
const Toolbar = (props) => (
    <header className='toolbar'>
        <nav className='toolbar-navigation'>
            <div className='toolbar-toggle-button'>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className='toolbar-logo'>
                <Link style={{ textDecoration: 'none' }} to='/'>
                    RITUAL BEAUTY
                </Link>
            </div>

            <div className='spacer' />

            <div className='toolbar-navigation-items'>
                <ul>
                    {MainMenu.map((menu) => (
                        <li>
                            <Link style={{ textDecoration: 'none' }} to={menu.linkUrl}>
                                {menu.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;

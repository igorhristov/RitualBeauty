import React from 'react';
import { Link } from 'react-router-dom';

import DrawerToggleButton from '../DrowerToggleButton/DrawerToggleButton.component';
import './Toolbar.Styles.css';
const Toolbar = (props) => (
    <header className='toolbar'>
        <nav className='toolbar-navigation'>
            <div className="toolbar-toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className='toolbar-logo'>
                <Link style={{ textDecoration: 'none' }} to='/'>
                    RITUAL
                </Link>
            </div>

            <div className='spacer' />

            <div className='toolbar-navigation-items'>
                <ul>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/'>
                        Почетна
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/services'>
                        Услуги
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/gallery'>
                        Галерија
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/about-us'>
                        За Нас
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none' }} to='/contact-us'>
                        Контакт
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;

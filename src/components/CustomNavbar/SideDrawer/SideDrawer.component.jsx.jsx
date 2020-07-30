import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.Styles.css';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
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
        </nav>
    );
};
export default SideDrawer;

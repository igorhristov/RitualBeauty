import React from 'react';
import { Link } from 'react-router-dom';

import MainMenu from '../MainMenu';

import './SideDrawer.Styles.css';

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                {MainMenu.map((menu) => (
                    <li>
                        <Link style={{ textDecoration: 'none' }} to={menu.linkUrl}>
                            {menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default SideDrawer;

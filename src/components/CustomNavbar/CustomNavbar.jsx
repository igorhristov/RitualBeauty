import React from 'react';

import Toolbar from './toolbar/Toolbar.component';
import SideDrawer from './SideDrawer/SideDrawer.component.jsx';
import Backdrop from './Backdrop/Backdrop.component';

class CustomNavbar extends React.Component {
    state = {
        sideDrawerOpen: false,
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
            <>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
            </>
        );
    }
}

export default CustomNavbar;

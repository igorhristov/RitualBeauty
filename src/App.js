import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import AboutUs from './pages/about/about.component';
import GalleryPage from './pages/gallery/gallery.component';
import ContactUs from './pages/contact/contact.component';
import ServicesPage from './pages/services/services.component';
import ServicePage from './pages/service/service.component';

// import Header from './components/header/header.components';
import Footer from './components/footer/footer.component';
import ScrollToTop from './components/scrollToTop/scrollToTop.component';

import Toolbar from './components/CustomNavbar/toolbar/Toolbar.component';
import SideDrawer from './components/CustomNavbar/SideDrawer/SideDrawer.component.jsx';
import Backdrop from './components/CustomNavbar/Backdrop/Backdrop.component';

import './App.css';

class App extends React.Component {
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
            <Router>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                {/* <Header/> */}
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/services'>
                        <ServicesPage />
                    </Route>
                    <Route path='/services/:id'>
                        <ServicePage />
                    </Route>
                    <Route path='/about-us'>
                        <AboutUs />
                    </Route>
                    <Route path='/contact-us'>
                        <ContactUs />
                    </Route>
                    <Route path='/gallery'>
                        <GalleryPage />
                    </Route>
                </Switch>

                <Footer />
                <ScrollToTop />
            </Router>
        );
    }
}

export default App;

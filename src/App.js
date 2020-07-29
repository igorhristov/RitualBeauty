import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import AboutUs from './pages/about/about.component';
import ContactUs from './pages/contact/contact.component';
import ServicesPage from './pages/services/services.component';
import ServicePage from './pages/service/service.component';

import Header from './components/header/header.components';
import Footer from './components/footer/footer.component';
import ScrollToTop from './components/scrollToTop/scrollToTop.component';

import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
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
            </Switch>
            <Footer />
            <ScrollToTop />
        </Router>
    );
};

export default App;

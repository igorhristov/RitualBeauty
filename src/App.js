import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import GalleryPage from './pages/gallery/gallery.component';
import ContactUs from './pages/contact/contact.component';


import MakeupsPage from './pages/makeups/makeups.component';
import MakeupsServicePage from'./pages/mekup-service-page/makeupServicePage.copoment'
import DepilationsPage from './pages/depilations/depilations.component';
import DepilationsServicePage from'./pages/depilation-service-page/depilationServicePage.copoment'


import Header from './components/CustomNavbar/CustomNavbar';
import Footer from './components/footer/footer.component';
import ScrollToTop from './components/scrollToTop/scrollToTop.component';


import './App.css';

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/makeups'>
                <MakeupsPage />
            </Route>
            <Route path='/makeups/:id'>
                <MakeupsServicePage />
            </Route>

            <Route exact path='/depilations'>
                <DepilationsPage />
            </Route>
            <Route path='/depilations/:id'>
                <DepilationsServicePage />
            </Route>

           

            
            <Route path='/gallery'>
                <GalleryPage />
            </Route>
            <Route path='/contact-us'>
                <ContactUs />
            </Route>
            
        </Switch>

        <Footer />
        <ScrollToTop />
    </Router>
);

export default App;

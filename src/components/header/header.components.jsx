import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <Navbar style={{ backgroundColor: '#EC4090' }} variant='dark' expand='md' sticky='top'>
        <Navbar.Brand className='text-uppercase font-weight-bold' href='/'>
            Ritual Beauty
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto text-uppercase'>
                <NavLink exact={true} className='nav-link' activeStyle={{ color: 'white', fontWeight: 'bold' }} to='/'>
                    Почетна
                </NavLink>
                <NavLink activeStyle={{ color: 'white', fontWeight: 'bold' }} className='nav-link' to='/services'>
                    Услуги
                </NavLink>
                {/* <NavDropdown title='Услуги' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
                </NavDropdown> */}
                <NavLink activeStyle={{ color: 'white', fontWeight: 'bold' }} className='nav-link' to='/about-us'>
                    За Нас
                </NavLink>
                <NavLink activeStyle={{ color: 'white', fontWeight: 'bold' }} className='nav-link' to='/contact-us'>
                    Контакт
                </NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;

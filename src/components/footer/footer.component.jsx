import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink, faCommentDots, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './footer.styles.css';

const Footer = () => (
    <footer className='footer'>
        <Container className='footer-top'>
            <Row>
                <div className='col-md-4 text-center '>
                    <FontAwesomeIcon size='3x' className='footer-title mr-md-5' icon={faMapMarkerAlt} />

                    <h5 className=' mr-md-5 mb-4'>Get In Touch</h5>

                    <p className='text-md-left'>
                        ул. Епименонда Поп-Андонов бр.20 <br /> 2400 Струмица Македонија
                    </p>

                    <p className='text-md-left'>
                        <a href='mailto:contact@youremail.com'>info.ritual-beauty@gmail.com</a>
                    </p>

                    <p className='text-md-left'>
                        <a href='tel:078253186'>078 253 186</a>
                    </p>
                </div>

                <div className='col-md-4 text-center'>
                    <FontAwesomeIcon size='3x' className='footer-title' icon={faCommentDots} />

                    <h5 className='mb-4'>Social Media</h5>

                    <p>Каде можете да не најдете.</p>

                    <ul className='footer_social'>
                        <li>
                            <a
                                rel='noopener noreferrer'
                                href='https://www.facebook.com/search/top?q=marija%20marja%20peeva'
                                target='_blank'
                            >
                                <FontAwesomeIcon className='i fa-facebook' icon={faFacebookSquare} />
                            </a>
                        </li>

                        <li>
                            <a href='https://www.facebook.com/search/top?q=marija%20marja%20peeva'>
                                <FontAwesomeIcon className='i fa-instagram' icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/search/top?q=marija%20marja%20peeva'>
                                <FontAwesomeIcon className='i fa-twitter' icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/search/top?q=marija%20marja%20peeva'>
                                <FontAwesomeIcon className='i fa-youtube' icon={faYoutube} />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='col-md-4 text-center'>
                    <FontAwesomeIcon size='3x' className='footer-title' icon={faLink} />
                    <h5 className='mb-4'>Useful Links</h5>

                    <Link to='/' className='footer-links'>
                        Тимот на Ritual Beauty
                    </Link>

                    <Link to='/makeups' className='footer-links'>
                        Услуги
                    </Link>

                    <Link to='/contact-us' className='footer-links'>
                        Ценовници
                    </Link>
                </div>
            </Row>
        </Container>
        <Container fluid className='footer-bottom px-0'>
            <Row noGutters className='mx-0'>
                <div className='col-md-12 text-center'>
                    <h6 className='text-uppercase'>
                        Copyright ©2020 <span className='template-name'>Ritual Beauty</span>
                    </h6>
                </div>
            </Row>
        </Container>
    </footer>
);

export default Footer;

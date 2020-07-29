import React from 'react';
import InnerHeader from '../../components/innerHeader/innerHeader.component';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Salon from './salon.jpg';

const AboutPage = () => (
    <>
        <InnerHeader title='За Нас' subtitle='Дознајте повеќе за нас' />
        <Container style={{ margin: '80px auto 60px' }} className='d-flex justify-content-center align-items-center '>
            <Row>
                <Col lg={6}>
                    <h2 style={{ color: '#EC4090' }} className='text-center mb-5 pt-3  text-uppercase'>
                        Ritual Beauty
                    </h2>
                    <div>
                        <p>
                            Znacajno e da se razbere deka RITUAL e nadvoresen izraz na vnatresno iskuseni vrednosti,
                            veruvanja i stavovi. Bas za toa ritalite se znacajni za nas, tie pravat nevidlivite raboti
                            odnosno vrednosti, veruvanja, i stavovi, koi se cesto zatskrieni da stanat konkretni i
                            vidlivi.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia saepe quis reiciendis
                            quibusdam nostrum quo sunt repudiandae, odit minima nobis possimus nemo ullam inventore quod
                            adipisci asperiores ab recusandae odio.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque et, iste dignissimos labore
                            dolorum repellat totam quaerat doloribus quos aperiam recusandae aspernatur quia aliquid,
                            impedit necessitatibus iusto ex aut? Tempora!
                        </p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='w-100 mt-2 mt-md-5 mt-xl-2 '>
                        <Image src={Salon} alt='salon' rounded fluid className='w-100' />
                    </div>
                </Col>
            </Row>
        </Container>
    </>
);

export default AboutPage;

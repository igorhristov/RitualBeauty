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
                            Ние сме редовни посетители на најпознатите семинари и конгреси за убавина во светот, учиме,
                            се надградуваме, ги следиме трендовите и ви ги правиме достапни најдокажаните и
                            најефективните иновации од светските центри на убавина како Италија, Англија, Франција,
                            Америка.
                        </p>
                        <p>
                            Нашиот салон прави спој на најсовремена светска технологија и обучен персонал. Салонот
                            располага со над 50 видови апарати со повеќе функции и програми кои опфаќаат третмани на
                            лице, тело и коса, кои во рацете на нашиот едуциран и високостручен персонал прават
                            вистински чуда и не само што ги остваруваат, туку и ги надминуваат вашите соништа за
                            убавина. Третманите кои ви ги нудиме од вас ќе направат олицетворение на убавината.
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

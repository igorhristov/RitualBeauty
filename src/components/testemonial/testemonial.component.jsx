import React from 'react';
import './testemonial.styles.css';

const Testemonial = () => (
    <section id='testimonials' className='testimonials'>
        <div className='section-title'>
            <h2>What people say about us</h2>
            <p>Our clients love us!</p>
        </div>
        <div className='testimonials-content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <blockquote className='testimonials-card'>
                            <img
                                src='https://github.com/igorhristov/homework-7/blob/master/assets/img/ariana-grande.jpg?raw=true'
                                alt='anne-hathaway'
                            />
                            <div className='testimonials-info'>
                                <p>
                                    "Ритуал Beauty е вистинска оаза каде човек може да го пронајде своето спокојство и
                                    да се почувствува сигурно… а тоа е првата предиспозиција за убавината!"
                                </p>
                                <footer>
                                    Andrijana Grande<span>Пејачка</span>
                                </footer>
                            </div>
                        </blockquote>
                    </div>

                    <div className='col-md-6'>
                        <blockquote className='testimonials-card'>
                            <img
                                src='https://igorhr.github.io/portfolio/htmlCSS/academy/homework/homework-7/assets/img/kate-upton.jpg'
                                alt='ariana grande'
                            />
                            <div className='testimonials-info'>
                                <p>
                                    "Ритуал Beauty е вистинска оаза каде човек може да го пронајде своето спокојство и
                                    да се почувствува сигурно… а тоа е првата предиспозиција за убавината!"
                                </p>
                                <footer>
                                    Kate Uton<span>Model</span>
                                </footer>
                            </div>
                        </blockquote>
                    </div>

                    <div className='col-md-6'>
                        <blockquote className='testimonials-card'>
                            <img
                                src='https://www.stylist.co.uk/images/app/uploads/2017/10/24154944/161e9dad102954e7e6e69544776d1d28-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress'
                                alt='anne-hathaway'
                            />
                            <div className='testimonials-info'>
                                <p>
                                    "Во Ритуал Beauty секогаш си ја враќам самодовербата, бидејќи кога ме разубавуваат
                                    имам чувство како да сум репарирана, преродена и пресреќна. Знаат да ја препознаат и
                                    истакнат природната убавина и совршено да ги скријат или отстранат аномалиите"
                                </p>
                                <footer>
                                    Margot Robbie <span>Actress</span>
                                </footer>
                            </div>
                        </blockquote>
                    </div>

                    <div className='col-md-6'>
                        <blockquote className='testimonials-card'>
                            <img
                                src='https://pbs.twimg.com/profile_images/429319858690347008/-_9pa31Z.jpeg'
                                alt='anne-hathaway'
                            />
                            <div className='testimonials-info'>
                                <p>
                                    "Во Ритуал Beauty секогаш си ја враќам самодовербата, бидејќи кога ме разубавуваат
                                    имам чувство како да сум репарирана, преродена и пресреќна. Знаат да ја препознаат и
                                    истакнат природната убавина и совршено да ги скријат или отстранат аномалиите"
                                </p>
                                <footer>
                                    Khloé Kardashian <span>American media personality</span>
                                </footer>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Testemonial;

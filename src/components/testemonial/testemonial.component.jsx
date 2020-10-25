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
                                src='https://picsum.photos/id/646/256/256.webp'

                                alt='user'
                            />
                            <div className='testimonials-info'>
                                <p>
                                    "Ритуал Beauty е вистинска оаза каде човек може да го пронајде своето спокојство и
                                    да се почувствува сигурно… а тоа е првата предиспозиција за убавината!"
                                </p>
                                <footer>
                                    Morgan Grande<span>Пејачка</span>
                                </footer>
                            </div>
                        </blockquote>
                    </div>

                    <div className='col-md-6'>
                        <blockquote className='testimonials-card'>
                            <img
                                src='https://picsum.photos/id/1027/256/256.webp'
                                alt='user'
                            />
                            <div className='testimonials-info'>
                                <p>
                                    "Ритуал Beauty е вистинска оаза каде човек може да го пронајде своето спокојство и
                                    да се почувствува сигурно… а тоа е првата предиспозиција за убавината!"
                                </p>
                                <footer>
                                    Roksolana Zasiadko<span>Model</span>
                                </footer>
                            </div>
                        </blockquote>
                    </div>

                    <div className='col-md-6'>
                        <blockquote className='testimonials-card'>
                            <img
                                src='https://picsum.photos/id/65/256/256.webp'

                                alt='user'
                            />
                            <div className='testimonials-info'>
                                <p>
                                    "Во Ритуал Beauty секогаш си ја враќам самодовербата, бидејќи кога ме разубавуваат
                                    имам чувство како да сум репарирана, преродена и пресреќна. Знаат да ја препознаат и
                                    истакнат природната убавина и совршено да ги скријат или отстранат аномалиите"
                                </p>
                                <footer>
                                    Kika Robbie <span>Actress</span>
                                </footer>
                            </div>
                        </blockquote>
                    </div>

                    <div className='col-md-6'>
                        <blockquote className='testimonials-card'>
                            <img
                                src='https://picsum.photos/id/449/256/256.webp'
                                alt='user'
                            />
                            <div className='testimonials-info'>
                                <p>
                                    "Во Ритуал Beauty секогаш си ја враќам самодовербата, бидејќи кога ме разубавуваат
                                    имам чувство како да сум репарирана, преродена и пресреќна. Знаат да ја препознаат и
                                    истакнат природната убавина и совршено да ги скријат или отстранат аномалиите"
                                </p>
                                <footer>
                                    Maci Serafinowic <span>American media personality</span>
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

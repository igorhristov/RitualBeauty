import React from 'react';
import InnerHeader from '../../components/innerHeader/innerHeader.component';
import ScrollToTopOnMount from '../../components/autoToTopScroll/scrollToTop';
import "./contact.styles.css";


const ContactPage = () => (
    <>
        <ScrollToTopOnMount />
        <InnerHeader title='Контакт' subtitle='Пишете ни порака' />
        <section className="contact-wrapper">
            <div className="center">
                <form
                    // action={`https://formspree.io/${process.env.MY_MAIL}`}
                    // method="POST"
                    className="form"
                >
                    <div>
                        <label htmlFor="name">Име</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="formControl"
                            placeholder="Вашето име"
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>

                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="formControl"
                            placeholder="Вашата електронска пошта"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Порака</label>

                        <textarea
                            name="message"
                            id="message"
                            rows="10"
                            className="formControl"
                            placeholder="Вашата порака"
                        />
                    </div>
                    <div>
                        <input type="submit" value="submit here" className="submit" />
                    </div>
                </form>
            </div>
        </section>

    </>
);

export default ContactPage;



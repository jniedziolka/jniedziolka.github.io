import React from 'react';

import { ReactComponent as EmailLogo } from '../../assets/icons/email.svg';
import { ReactComponent as PhoneLogo } from '../../assets/icons/phone.svg';
import { ReactComponent as HomeLogo } from '../../assets/icons/home.svg';
import SocialLogos from '../../components/social-logos/social-logos.component';

import ContactForm from '../../components/contact-form/contact-form.component';

import './contact.styles.scss';

const Contact = () => (
    <div className="contact">
        <h2 className="contact__header contact__header--first">Want To Discuss A Project?</h2>
        <p className="contact__header contact__header--second">Just Drop A Message Below And I'll Get In Touch!</p>
        <div className="contact__information">
            <div className="contact__information__logos-container">
                <EmailLogo className="contact__information__logo" />
                <PhoneLogo className="contact__information__logo" />
                <HomeLogo className="contact__information__logo" />
            </div>
            <div className="contact__information__details-container">
                <div className="contact__information__detail">
                    <h1 className="contact__information__detail--header">QUERIES</h1>
                    <p className="contact__information__detail--info">jakub.niedziolka@o2.pl</p>
                </div>
                <div className="contact__information__detail">
                    <h1 className="contact__information__detail--header">CALL ME</h1>
                    <p className="contact__information__detail--info">510485134</p>
                </div>
                <div className="contact__information__detail">
                    <h1 className="contact__information__detail--header">LOCATION</h1>
                    <p className="contact__information__detail--info">Anywhere</p>
                </div>
            </div>
        </div>
        <div className="contact__form-container">
            <ContactForm />
        </div>
        <div className="contact__social-container">
            <SocialLogos />
        </div> 
        <p className="contact__footer">&#169;Copyright 2020 Jakub Niedziółka</p>
    </div>
);

export default Contact;
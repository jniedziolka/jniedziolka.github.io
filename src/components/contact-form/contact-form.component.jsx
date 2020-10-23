import React from 'react';

import './contact-form.styles.scss';

const ContactForm = () => (
    <React.Fragment>
        <form className="form">
            <div className="form__container">
                <div className="form--left">
                    <div className="form__group">
                        <label htmlFor="" className="form__label">Your Name</label>
                        <input type="text" className="form__input" placeholder="Write Your Name" />
                    </div>
                    <div className="form__group">
                        <label htmlFor="" className="form__label">Your Email</label>
                        <input type="text" className="form__input" placeholder="Enter Your Email" />
                    </div>
                </div>
                <div className="form--right">
                    <div className="form__group">
                        <label htmlFor="" className="form__label">Your Message</label>
                        <textarea name="" id="" cols="30" rows="10" className="form__input form__input--textarea" placeholder="I'd love To Hire You!"></textarea>
                    </div>
                </div>
            </div>
            <button className="form__button">SEND MESSAGE</button>
        </form>
    </React.Fragment>
);

export default ContactForm;
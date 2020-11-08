import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './contact-form.styles.scss';

const ContactForm = () => {
    const [formInputs, setInputs] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formInputs;

    const handleChange = event => {
        const { value, name } = event.target;

        setInputs({...formInputs, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            message
        };

        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    
    return (
        <React.Fragment>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__container">
                    <div className="form--left">
                        <div className="form__group">
                            <label htmlFor="" className="form__label">Your Name</label>
                            <input type="text" name="name" className="form__input" placeholder="Write Your Name" value={name} onChange={handleChange} />
                        </div>
                        <div className="form__group">
                            <label htmlFor="" className="form__label">Your Email</label>
                            <input type="text" name="email" className="form__input" placeholder="Enter Your Email" value={email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form--right">
                        <div className="form__group">
                            <label htmlFor="" className="form__label">Your Message</label>
                            <textarea name="message" id="" cols="30" rows="10" className="form__input form__input--textarea" placeholder="I'd love To Hire You!" value={message} onChange={handleChange}></textarea>
                        </div>
                    </div>
                </div>
                <button className="form__button">SEND MESSAGE</button>
            </form>
        </React.Fragment>
    );
}

export default ContactForm;
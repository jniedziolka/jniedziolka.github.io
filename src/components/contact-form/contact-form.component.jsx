import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

import {
    FormContainer,
    FormLeft,
    FormRight,
    FormGroup,
    FormLabel,
    FormInput,
    FormTextarea,
    FormButton
} from './contact-form.styles';

const ContactForm = () => {
    const [formInputs, setInputs] = useState({ name: '', email: '', message: ''});
    const [sendState, setSendState] = useState(false);
    const { name, email, message } = formInputs;
    const buttonRef = useRef(null);

    const handleChange = event => {
        const { value, name } = event.target;

        setInputs({...formInputs, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        buttonRef.current.innerText = 'Loading...';
        setSendState(true);

        const templateParams = {
            from_name: name,
            from_email: email,
            message
        };

        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID)
            .then((result) => {
                buttonRef.current.classList.add('form-success');
                buttonRef.current.innerText = 'Email was delivered!';
            }, (error) => {
                buttonRef.current.classList.add('form-error');
                buttonRef.current.innerText = 'Error! Please try later!';
            });

        setTimeout(() => {
            setInputs({ name: '', email: '', message: ''});
            buttonRef.current.classList.remove('form-success');
            buttonRef.current.classList.remove('form-error');
            buttonRef.current.innerText = 'SEND MESSAGE';
            setSendState(false);
        }, 5000);
    }
    
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <FormContainer>
                    <FormLeft>
                        <FormGroup>
                            <FormLabel>Your Name</FormLabel>
                            <FormInput type="text" name="name" placeholder="Write Your Name" value={name} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Your Email</FormLabel>
                            <FormInput type="text" name="email" placeholder="Enter Your Email" value={email} onChange={handleChange} />
                        </FormGroup>
                    </FormLeft>
                    <FormRight>
                        <FormGroup>
                            <FormLabel>Your Message</FormLabel>
                            <FormTextarea name="message" id="" cols="30" rows="10" placeholder="I'd love To Hire You!" value={message} onChange={handleChange}></FormTextarea>
                        </FormGroup>
                    </FormRight>
                </FormContainer>
                <FormButton ref={buttonRef} disabled={sendState}>SEND MESSAGE</FormButton>
            </form>
        </React.Fragment>
    );
}

export default ContactForm;
import React from 'react';

import SocialLogos from '../../components/social-logos/social-logos.component';
import ContactForm from '../../components/contact-form/contact-form.component';

import {
    EmailLogo,
    PhoneLogo,
    HomeLogo,
    ContactContainer,
    ContactHeader,
    ContactInvite,
    Information,
    InformationDetail,
    InformationHeader,
    InformationInfo,
    SocialContainer,
    Footer
} from './contact.styles';

const Contact = () => (
    <ContactContainer>
        <ContactHeader>Want To Discuss A Project?</ContactHeader>
        <ContactInvite>Just Drop A Message Below And I'll Get In Touch!</ContactInvite>
        <Information>
            <InformationDetail>
                <EmailLogo />
                <InformationHeader>QUERIES</InformationHeader>
                <InformationInfo>jakub.niedziolka@o2.pl</InformationInfo>
            </InformationDetail>
            <InformationDetail>
                <PhoneLogo />
                <InformationHeader>CALL ME</InformationHeader>
                <InformationInfo>510485134</InformationInfo>
            </InformationDetail>
            <InformationDetail>
                <HomeLogo />
                <InformationHeader>LOCATION</InformationHeader>
                <InformationInfo>Anywhere</InformationInfo>
            </InformationDetail>
        </Information>
        <ContactForm />
        <SocialContainer>
            <SocialLogos />
        </SocialContainer> 
        <Footer>&#169;Copyright 2020 Jakub Niedziółka</Footer>
    </ContactContainer>
);

export default Contact;
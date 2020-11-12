import React from 'react';

import Services from '../../components/services/services.component';
import Help from '../../components/help/help.component';

import {
    AboutContainer,
    AboutDescriptionContainer,
    AboutMe,
    AboutHeaderContainer,
    PersonLogo,
    AboutHeader,
    AboutDescription,
    AboutWork,
    AboutPosition,
    AboutElementContainer,
    AboutName,
    CompanyLogo,
    ClockLogo,
    ServicesContainer,
    HelpContainer
} from './about.styles';

const About = () => (
    <AboutContainer>
        <AboutDescriptionContainer>
            <AboutMe>
                <AboutHeaderContainer>
                    <PersonLogo />
                    <AboutHeader>About Me</AboutHeader>
                </AboutHeaderContainer>
                <AboutDescription>
                    I am passionate Full-Stack/Software Developer with the love for the code.
                    <br /> <br />
                    I put all my effort into creating something amazing, something that matters.
                    My motto is that programming is like a silent poetry and we, as the authors, put beauty into our own work.
                </AboutDescription>
            </AboutMe>
            <AboutWork>
                <AboutHeaderContainer>
                    <CompanyLogo header="true" />
                    <AboutHeader>Work History</AboutHeader>
                </AboutHeaderContainer>
                <AboutPosition>Full-Stack/Software Developer</AboutPosition>
                <AboutElementContainer>
                    <CompanyLogo />
                    <AboutName>Dalkia Polska Solutions</AboutName>
                </AboutElementContainer>
                <AboutElementContainer>
                    <ClockLogo />
                    <AboutName>07.2019-Present</AboutName>
                </AboutElementContainer>
            </AboutWork>
        </AboutDescriptionContainer>
        <ServicesContainer>
            <Services />
        </ServicesContainer>
        <HelpContainer>
            <Help />
        </HelpContainer>
    </AboutContainer>
);

export default About;
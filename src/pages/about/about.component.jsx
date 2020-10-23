import React from 'react';

import Services from '../../components/services/services.component';
import Help from '../../components/help/help.component';

import { ReactComponent as PersonLogo } from '../../assets/icons/user.svg';
import { ReactComponent as CompanyLogo } from '../../assets/icons/building.svg';
import { ReactComponent as ClockLogo } from '../../assets/icons/clock.svg';

import './about.styles.scss';

const About = () => (
    <div className="about__container">
        <div className="about__description">
            <div className="about__me">
                <div className="about__header">
                    <PersonLogo className="about__header__logo" />
                    <h3 className="about__header__header">About Me</h3>
                </div>
                <p className="about__me__description">
                    I am passionate Full-Stack/Software Developer with the love for the code.
                    <br /> <br />
                    I put all my effort into creating something amazing, something that matters.
                    My motto is that programming is like a silent poetry and we, as the authors, put beauty into our own work.
                </p>
            </div>
            <div className="about__work">
                <div className="about__header">
                    <CompanyLogo className="about__header__logo" />
                    <h3 className="about__header__header">Work History</h3>
                </div>
                <p className="about__header__position">Full-Stack/Software Developer</p>
                <div className="about__header__element">
                    <CompanyLogo className="about__header__element--logo" />
                    <p className="about__header__element--name">Dalkia Polska Solutions</p>
                </div>
                <div className="about__header__element">
                    <ClockLogo className="about__header__element--logo" />
                    <p className="about__header__element--name">07.2019-Present</p>
                </div>
            </div>
        </div>
        <div className="about__services">
            <Services />
        </div>
        <div className="about__help">
            <Help />
        </div>
    </div>
);

export default About;
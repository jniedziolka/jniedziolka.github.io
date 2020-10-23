import React from 'react';
import SocialLogos from '../../components/social-logos/social-logos.component';
import Showcase from '../../components/showcase/showcase.component';

import './homepage.styles.scss'

const HomePage = () => (
    <div className="homepage">
        <div className="homepage__container">
            <img src="images/avatar.png" alt="avatar" className="avatar"/>
            <h1 className="homepage__name">Jakub Niedziółka</h1>
            <h2 className="homepage__position">Software Developer</h2>
            <div className="homepage__social-container">
                <SocialLogos />
            </div>
        </div>
        <div id="portfolio" className="homepage__showcase">
            <Showcase />
        </div>
    </div>
);

export default HomePage;
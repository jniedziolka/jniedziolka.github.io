import React from 'react';
import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook.svg'
import { ReactComponent as GithubLogo } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/icons/linkedin.svg';
import Showcase from '../../components/showcase/showcase.component';

import './homepage.styles.scss'

const HomePage = () => (
    <div className="homepage">
        <div className="homepage__container">
            <img src="images/avatar.png" alt="avatar" className="avatar"/>
            <h1 className="homepage__name">Jakub Niedziółka</h1>
            <h2 className="homepage__position">Software Developer</h2>
            <div className="homepage__social-container">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <div className="circle">
                        <FacebookLogo className="icon" />
                    </div>
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                    <div className="circle">
                        <GithubLogo className="icon" />
                    </div>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <div className="circle">
                        <LinkedinLogo className = "icon" />
                    </div>
                </a>
            </div>
        </div>
        <div id="portfolio" className="homepage__showcase">
            <Showcase />
        </div>
    </div>
);

export default HomePage;
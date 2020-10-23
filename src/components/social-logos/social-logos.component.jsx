import React from 'react';
import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook.svg'
import { ReactComponent as GithubLogo } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/icons/linkedin.svg';

import './social-logos.styles.scss';

const SocialLogos = () => (
    <React.Fragment>
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
    </React.Fragment>
);

export default SocialLogos;
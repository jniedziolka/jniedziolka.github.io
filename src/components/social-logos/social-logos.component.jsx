import React from 'react';

import { ReactComponent as CVLogo } from '../../assets/icons/cv.svg';
import { ReactComponent as GithubLogo } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/icons/linkedin.svg';

import { CircleClip } from './social-logos.styles';

const SocialLogos = () => (
    <React.Fragment>
        <a href="/CV_Jakub_Niedziolka.pdf" download={true}>
            <CircleClip>
                <CVLogo />
            </CircleClip>
        </a>
        <a href="https://www.github.com/jniedziolka" target="_blank" rel="noopener noreferrer">
            <CircleClip>
                <GithubLogo />
            </CircleClip>
        </a>
        <a href="https://www.linkedin.com/in/jakub-niedziolka" target="_blank" rel="noopener noreferrer">
            <CircleClip>
                <LinkedinLogo />
            </CircleClip>
        </a>
    </React.Fragment>
);

export default SocialLogos;
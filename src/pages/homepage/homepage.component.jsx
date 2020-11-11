import React from 'react';
import SocialLogos from '../../components/social-logos/social-logos.component';
import Showcase from '../../components/showcase/showcase.component';

import {
    Homepage,
    HomepageContainer,
    Avatar,
    HomepageName,
    HomepagePosition,
    SocialContainer,
    ShowcaseContainer
} from './homepage.styles';

const HomePage = () => (
    <Homepage>
        <HomepageContainer>
            <Avatar src="images/avatar.png" alt="avatar" />
            <HomepageName>Jakub Niedziółka</HomepageName>
            <HomepagePosition>Software Developer</HomepagePosition>
            <SocialContainer>
                <SocialLogos />
            </SocialContainer>
        </HomepageContainer>
        <ShowcaseContainer>
            <Showcase />
        </ShowcaseContainer>
    </Homepage>
);

export default HomePage;
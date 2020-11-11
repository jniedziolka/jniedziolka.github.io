import React from 'react';

import {
    HelpContainer,
    HelpHeader,
    HelpTemptation,
    LikeIcon,
    HelpText,
    HelpButton
} from './help.styles';

const Help = () => (
    <HelpContainer>
        <HelpHeader>Need Any Help?</HelpHeader>
        <HelpTemptation>
            <LikeIcon />
            <HelpText>I can try to solve your problems!</HelpText>
        </HelpTemptation>
        <HelpButton>Contact Me</HelpButton>
    </HelpContainer>
);

export default Help;
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
        <HelpButton to='/contact'>CONTACT ME</HelpButton>
    </HelpContainer>
);

export default Help;
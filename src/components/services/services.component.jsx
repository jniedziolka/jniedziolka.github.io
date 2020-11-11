import React from 'react';

import {
    ServicesContainer,
    ServicesHeaderContainer,
    BookmarkIcon,
    ServicesHeader,
    ServicesTasksContainer,
    ServicesTask,
    CodingIcon,
    ChatIcon,
    IdeaIcon,
    ServicesTitle,
    ServicesContent
} from './services.styles';

const Services = () => (
    <ServicesContainer>
        <ServicesHeaderContainer>
            <BookmarkIcon />
            <ServicesHeader>What I Do</ServicesHeader>
        </ServicesHeaderContainer>
        <ServicesTasksContainer>
            <ServicesTask>
                <CodingIcon />
                <ServicesTitle>PROGRAMMING</ServicesTitle>
                <ServicesContent>I love programming and I love spending time on it. Of course, work-life balance is important but sometimes, when it is a passion, it is hard to stick to it.</ServicesContent>
            </ServicesTask>
            <ServicesTask>
                <ChatIcon />
                <ServicesTitle>CONTACTING WITH CLIENT</ServicesTitle>
                <ServicesContent>Talk is a diamond. Listening and understanding people is my strong skill. I know how to ask questions and how to answer them to find the best solutions.</ServicesContent>
            </ServicesTask>
            <ServicesTask>
                <IdeaIcon />
                <ServicesTitle>BRINGING IDEAS INTO REALITY</ServicesTitle>
                <ServicesContent>You have a perfect idea? Or maybe you want me to invent something based on your notes? You came to the right place - I come across new ideas all the time and I know how to use them in an efficient way.</ServicesContent>
            </ServicesTask>
        </ServicesTasksContainer>
    </ServicesContainer>
);

export default Services;
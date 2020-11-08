import React from 'react';

import { ReactComponent as BookmarkIcon } from '../../assets/icons/bookmark.svg';
import { ReactComponent as CodingIcon } from '../../assets/icons/html-coding.svg';
import { ReactComponent as ChatIcon } from '../../assets/icons/speech-bubble.svg';
import { ReactComponent as IdeaIcon } from '../../assets/icons/idea.svg';

import './services.styles.scss';

const Services = () => (
    <div className="services">
        <div className="services__header">
            <BookmarkIcon className="services__header__icon" />
            <h2 className="services__header__content">What I Do</h2>
        </div>
        <div className="services__tasks">
            <div className="services__task">
                <CodingIcon className="services__task__icon" />
                <h2 className="services__task__header">PROGRAMMING</h2>
                <p className="services__task__text">I love programming and I love spending time on it. Of course, work-life balance is important but sometimes, when it is a passion, it is hard to stick to it.</p>
            </div>
            <div className="services__task">
                <ChatIcon className="services__task__icon" />
                <h2 className="services__task__header">CONTACTING WITH CLIENT</h2>
                <p className="services__task__text">Talk is a diamond. Listening and understanding people is my strong skill. I know how to ask questions and how to answer them to find the best solutions.</p>
            </div>
            <div className="services__task">
                <IdeaIcon className="services__task__icon" />
                <h2 className="services__task__header">BRINGING IDEAS INTO REALITY</h2>
                <p className="services__task__text">You have a perfect idea? Or maybe you want me to invent something based on your notes? You came to the right place - I come across new ideas all the time and I know how to use them in an efficient way.</p>
            </div>
        </div>
    </div>
);

export default Services;
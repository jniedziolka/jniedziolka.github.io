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
                <p className="services__task__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div className="services__task">
                <ChatIcon className="services__task__icon" />
                <h2 className="services__task__header">CONTACTING WITH CLIENT</h2>
                <p className="services__task__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div className="services__task">
                <IdeaIcon className="services__task__icon" />
                <h2 className="services__task__header">BRINGING IDEAS INTO REALITY</h2>
                <p className="services__task__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
        </div>
    </div>
);

export default Services;
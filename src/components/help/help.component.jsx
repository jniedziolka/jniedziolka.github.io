import React from 'react';

import { ReactComponent as LikeIcon } from '../../assets/icons/like.svg';

import './help.styles.scss';

const Help = () => (
    <div className="help">
        <h2 className="help__header">Need Any Help?</h2>
        <div className="help__temptation">
            <LikeIcon className="help__temptation__icon" />
            <p className="help__temptation__text">I can try to solve your problems!</p>
        </div>
        <button className="help__button">Contact Me</button>
    </div>
);

export default Help;
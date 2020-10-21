import React from 'react';

import './showcase.styles.scss';

const Showcase = () => (
    <div className="showcase">
        <nav className="showcase__header">
            <p className="showcase__link showcase__link--active">ALL</p>
            <p className="showcase__link">LARAVEL</p>
            <p className="showcase__link">REACT</p>
        </nav>
        <div className="showcase__projects">
            <img src="https://via.placeholder.com/300" alt="" className="showcase__image"/>
            <img src="https://via.placeholder.com/300" alt="" className="showcase__image"/>
            <img src="https://via.placeholder.com/300" alt="" className="showcase__image"/>
            <img src="https://via.placeholder.com/300" alt="" className="showcase__image"/>
            <img src="https://via.placeholder.com/300" alt="" className="showcase__image"/>
            <img src="https://via.placeholder.com/300" alt="" className="showcase__image"/>
        </div>
        <button className="showcase__button-more">LOAD MORE</button>
    </div>
);

export default Showcase;
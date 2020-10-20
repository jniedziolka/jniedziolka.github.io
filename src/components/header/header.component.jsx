import React from 'react';
import { ReactComponent as HomeLogo } from '../../assets/icons/home.svg';
import './header.styles.scss'

const Header = () => (
    <header className="header">
        <nav className="header__navigation">
            <a className="header__link"><HomeLogo className="header__logo" /></a>
            <a className="header__link">PORTFOLIO</a>
            <a className="header__link">ABOUT</a>
            <a className="header__link">SERVICES</a>
            <a className="header__link">CONTACT</a>
        </nav>
    </header>
);

export default Header;
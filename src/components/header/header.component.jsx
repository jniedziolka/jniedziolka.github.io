import React, { useEffect, useRef } from 'react';
import { ReactComponent as HomeLogo } from '../../assets/icons/home.svg';
import './header.styles.scss'

const Header = () => {
    const headerEl = useRef(null);

    const handleScroll = () => {
        const offset = headerEl.current.offsetTop;
        if (window.pageYOffset > offset) {
            headerEl.current.classList.add('header--sticky');
          } else {
            headerEl.current.classList.remove("header--sticky");
          }
    } 

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
    });

    return (
        <header className="header" ref={headerEl} on>
            <nav className="header__navigation">
                <a className="header__link" href="/"><HomeLogo className="header__logo" /></a>
                <a className="header__link" href="#portfolio">PORTFOLIO</a>
                <a className="header__link" href="/about">ABOUT</a>
                <a className="header__link" href="/services">SERVICES</a>
                <a className="header__link" href="/contact">CONTACT</a>
            </nav>
        </header>
    );
}

export default Header;
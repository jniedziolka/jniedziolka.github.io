import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
        <header className="header" ref={headerEl}>
            <nav className="header__navigation">
                <Link className="header__link" to="/"><HomeLogo className="header__logo" /></Link>
                <a className="header__link" href="/#portfolio">PORTFOLIO</a>
                <Link className="header__link" to="/about">ABOUT</Link>
                <Link className="header__link" to="/contact">CONTACT</Link>
            </nav>
        </header>
    );
}

export default Header;
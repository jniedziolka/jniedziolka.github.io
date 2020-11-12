import React, { useEffect, useRef } from 'react';

import {
    Placeholder,
    HeaderContainer,
    HeaderNavigation,
    HomeLogo,
    HeaderLink
} from './header.styles';

const Header = () => {
    const headerEl = useRef(null);
    const containerEl = useRef(null);

    const handleScroll = () => {
        const offset = headerEl.current.offsetTop;
        if (window.pageYOffset > offset) {
            headerEl.current.classList.add('sticky');
            containerEl.current.classList.add('placeholder');
          } else {
            headerEl.current.classList.remove('sticky');
            containerEl.current.classList.remove('placeholder');
          }
    } 

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <Placeholder ref={containerEl}>
            <HeaderContainer ref={headerEl}>
                <HeaderNavigation>
                    <HeaderLink to="/"><HomeLogo /></HeaderLink>
                    <HeaderLink to="/">PORTFOLIO</HeaderLink>
                    <HeaderLink to="/about">ABOUT</HeaderLink>
                    <HeaderLink to="/contact">CONTACT</HeaderLink>
                </HeaderNavigation>
            </HeaderContainer>
        </Placeholder>
    );
}

export default Header;
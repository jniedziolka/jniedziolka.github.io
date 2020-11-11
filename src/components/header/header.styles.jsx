import styled, { css } from 'styled-components';

import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { Link } from 'react-router-dom';

export const Placeholder = styled.div`
    &.placeholder {
        height: 5rem;
    }
`;

export const HeaderContainer = styled.header`
    background-color: #8e45ae;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;

    &.sticky {
        width: 100%;
        z-index: 100;
        position: fixed;
        box-shadow: 0 .2rem 1.5rem rgba(0, 0, 0, .5);
    }
`;

export const HeaderNavigation = styled.nav`
    margin: 2rem 0;
`;

export const HomeLogo = styled(Home)`
    height: 1rem;
`;

export const HeaderLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: white;
    margin-left: 2rem;
    font-size: .95rem;
    font-weight: 700;
`;
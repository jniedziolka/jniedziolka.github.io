import styled from 'styled-components';
import { breakpoints } from '../../assets/styles/variables';

export const ShowcaseContainer = styled.div`
    background-color: white;
    width: 50%;
    margin: 0 auto;
    height: 10rem;
    transform: translateY(-2.75rem);
    border-radius: 1rem;

    @media only screen and (max-width: ${breakpoints.breakpointLargest}) {
        width: 75%;
    }

    @media only screen and (max-width: ${breakpoints.breakpointLarge}) {
        width: 90%;
    }
`;

export const ShowcaseNavigation = styled.nav`
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    margin-bottom: 1.5rem;
`;

export const ShowcaseLink = styled.p`
    cursor: pointer;
    margin: 0 1.25rem;
    font-size: 1rem;
    font-weight: 500;

    &.active {
        color: #FAC663;
        padding-bottom: 1.25rem;
        border-bottom: .15rem solid #FAC663;
    }
`;

export const ShowcaseProjectsContainer = styled.div`
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 1.5rem;

    @media only screen and (max-width: ${breakpoints.breakpointMedium}) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: ${breakpoints.breakpointSmall}) {
        grid-template-columns: 1fr;
    }
`;

export const ShowcaseProject = styled.div`
    position: relative;
    transition: all .5s;

    &:hover > div {
        visibility: visible;
        opacity: 1;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

export const ShowcaseImage = styled.img`
    max-width: 100%;
    height: auto;
`;

export const ShowcaseLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    visibility: hidden;
    opacity: 0;
    transition: all .5s;

    & > * {
        margin: 0 1rem;
    }
`;

export const ShowcaseCodeLink = styled.a`
    text-decoration: none;
    outline: none;
    background-color: #FAC663;
    color: white;
    border-radius: 1px;
    padding: 1rem 1.5rem;
`;

export const ShowcaseCodeButton = styled.button`
    text-decoration: none;
    outline: none;
    background-color: #FAC663;
    color: white;
    border-radius: 1px;
    padding: 1rem 1.5rem;

    &:disabled {
        cursor: not-allowed;
        background-color: gray;
    }
`;

export const ShowcaseMoreButton = styled.button`
    cursor: pointer;
    display: block;
    outline: none;
    border: .2rem solid transparent;
    margin: 1.5rem auto;
    padding: 1.25rem 1.75rem;
    border-radius: .2rem;
    background-color: #FAC663;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    transition: all 1s;

    &:hover:enabled {
        background-color: white;
        color: #FAC663;
        border: .2rem solid #FAC663;
    }

    &:disabled {
        cursor: not-allowed;
        background-color: gray;
    }
`;
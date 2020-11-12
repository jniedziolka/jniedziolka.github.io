import styled, { css } from 'styled-components';

import { breakpoints } from '../../assets/styles/variables';

import { ReactComponent as Bookmark } from '../../assets/icons/bookmark.svg';
import { ReactComponent as Coding } from '../../assets/icons/html-coding.svg';
import { ReactComponent as Chat } from '../../assets/icons/speech-bubble.svg';
import { ReactComponent as Idea } from '../../assets/icons/idea.svg';

const baseServiceIconStyles = css`
    display: block;
    height: 3rem;
`;

export const ServicesContainer = styled.div`
    color: white;
`;

export const ServicesHeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: ${breakpoints.breakpointSmallest}) {
        justify-content: flex-start;
        margin-left: 1.5rem;
    }
`;

export const BookmarkIcon = styled(Bookmark)`
    height: 1.5rem;
    margin-right: 1rem;
`;

export const ServicesHeader = styled.h2`
    font-size: 1.5rem;
`;

export const ServicesTasksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    justify-items: center;
    margin: 4rem 20rem;

    @media only screen and (max-width: ${breakpoints.breakpointLarge}) {
        margin: 4rem 10rem;
    }

    @media only screen and (max-width: ${breakpoints.breakpointMedium}) {
        grid-template-columns: 1fr;
        margin-bottom: 0;
    }

    @media only screen and (max-width: ${breakpoints.breakpointSmall}) {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
`;

export const ServicesTask = styled.div`
    @media only screen and (max-width: ${breakpoints.breakpointMedium}) {
        margin-bottom: 2rem;
    }
`;

export const CodingIcon = styled(Coding)`
    ${baseServiceIconStyles}
`;

export const ChatIcon = styled(Chat)`
    ${baseServiceIconStyles}
`;

export const IdeaIcon = styled(Idea)`
    ${baseServiceIconStyles}
`;

export const ServicesTitle = styled.h2`
    font-size: 1.5rem;
`;

export const ServicesContent = styled.p`
    font-size: 1rem;
`;

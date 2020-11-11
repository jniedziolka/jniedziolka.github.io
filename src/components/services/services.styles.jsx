import styled, { css } from 'styled-components';

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
    margin-top: 4rem;
`;

export const ServicesTask = styled.div`

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

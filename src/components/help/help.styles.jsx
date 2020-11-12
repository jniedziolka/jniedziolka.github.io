import styled from 'styled-components';

import { ReactComponent as Like } from '../../assets/icons/like.svg';

export const HelpContainer = styled.div`
    text-align: center;
`;

export const HelpHeader = styled.h2`
    font-size: 1.5rem;
`;

export const HelpTemptation = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LikeIcon = styled(Like)`
    height: 2.5rem;
    margin-right: 1rem;
`;

export const HelpText = styled.p`
    font-size: 1rem;
`;

export const HelpButton = styled.button`
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #FAC663;
    color: white;
    padding: 1rem;
    transition: all 1s;
`;
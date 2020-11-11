import styled from 'styled-components';

export const Homepage = styled.div`
    background-color: #8e45ae;
`;

export const HomepageContainer = styled.div`
    text-align: center;
    padding-bottom: 8rem;
    padding-top: 5rem;
`;

export const HomepageName = styled.h1`
    color: white;
    font-size: 2.5rem;
`;

export const HomepagePosition = styled.h2`
    color: white;
    font-size: 1.5rem;
    font-weight: 300;

    &:after {
            display: block;
            margin: 1rem auto;
            height: .25rem;
            width: 1.5rem;
            background: white;
            content: '';
        }
`;

export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ShowcaseContainer = styled.div`
    background-color: white;
`;

export const Avatar = styled.img`
    display: block;
    clip-path: circle();
    margin: 0 auto;
    height: 15rem;
`;
import styled, { css } from 'styled-components';

import { ReactComponent as Person } from '../../assets/icons/user.svg';
import { ReactComponent as Company } from '../../assets/icons/building.svg';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';

export const AboutContainer = styled.div`

`;

export const AboutDescriptionContainer = styled.div`
    padding: 4rem 0;
    background-color: white;
    display: flex;
    justify-content: center;
`;

export const AboutMe = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
`;

export const AboutHeaderContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const PersonLogo = styled(Person)`
    height: 2rem;
`;

export const AboutHeader = styled.h3`
    margin-left: 1rem;
    color: #FAC663;
    font-size: 1.5rem;
`;

export const AboutDescription = styled.p`
    margin: 0;
    width: 55%;
    font-size: 1rem;
    font-weight: 300;
`;

export const AboutPosition = styled.p`
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

export const AboutWork = styled.div`

`;

export const AboutElementContainer = styled.div`
    display: flex;
    align-items: center 
`;

export const AboutName = styled.p`
    color: gray;
    font-size: .8rem;
    font-weight: 500;
    margin-left: 1rem;
`;

export const CompanyLogo = styled(Company)`
    height: ${props => props.header ? '2rem' : '1.2rem'}
`;

export const ClockLogo = styled(Clock)`
    height: 1.2rem;
`;

export const ServicesContainer = styled.div`
    background-color: #8e45ae;
    padding: 4rem 20rem;
`;

export const HelpContainer = styled.div`
    background-color: white;
    padding: 4rem 0;
`;
import styled from 'styled-components';
import { breakpoints } from '../../assets/styles/variables';

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

    @media only screen and (max-width: ${breakpoints.breakpointSmallest}) {
        flex-direction: column;
        padding: 2rem 0;
    }
`;

export const AboutMe = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: ${breakpoints.breakpointBig}) {
        width: 50%;
    }

    @media only screen and (max-width: ${breakpoints.breakpointSmallest}) {
        margin: 0 1.5rem;
        width: 90%;
    }
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

    @media only screen and (max-width: ${breakpoints.breakpointSmall}) {
        width: 75%;
    }

    @media only screen and (max-width: ${breakpoints.breakpointSmallest}) {
        width: 100%;
    }
`;

export const AboutPosition = styled.p`
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

export const AboutWork = styled.div`
    @media only screen and (max-width: ${breakpoints.breakpointSmallest}) {
        margin: 0 1.5rem;
    }
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
    width: 100%;
    background-color: #8e45ae;
    padding: 3rem 0;

    @media only screen and (max-width: ${breakpoints.breakpointLarge}) {
        margin: 2rem 0;
    }
`;

export const HelpContainer = styled.div`
    background-color: white;
    padding: 4rem 0;
`;
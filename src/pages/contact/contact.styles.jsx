import styled, { css } from 'styled-components';
import { breakpoints } from '../../assets/styles/variables';

import { ReactComponent as Email } from '../../assets/icons/email.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Home } from '../../assets/icons/home.svg';

const baseLogoStyles = css`
    height: 1.5rem;
`;

export const EmailLogo = styled(Email)`
    ${baseLogoStyles}
`;

export const PhoneLogo = styled(Phone)`
    ${baseLogoStyles}
`;

export const HomeLogo = styled(Home)`
    ${baseLogoStyles}
`;

export const ContactContainer = styled.div`
    min-height: 100%;
    background-color: #8e45ae;
    padding-top: 2rem;
`;

export const ContactHeader = styled.h2`
    color: white;
    text-align: center;
    font-size: 2rem;

    @media only screen and (max-width: ${breakpoints.breakpointSmall}) {
        font-size: 1.5rem;
    }
`;

export const ContactInvite = styled.p`
    color: white;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;

    @media only screen and (max-width: ${breakpoints.breakpointSmall}) {
        font-size: .85rem;
    }

    &:after {
        display: block;
        margin: 1rem auto;
        height: .25rem;
        width: 2rem;
        background: white;
        content: '';

        @media only screen and (max-width: ${breakpoints.breakpointSmall}) {
            width: 1.5rem;
        }
    }
`;

export const Information = styled.div`
    margin: 5rem 0;
    display: flex;
    justify-content: space-evenly;
`;

export const InformationDetail = styled.div`
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    @media only screen and (max-width: ${breakpoints.breakpointSmall}) {
        margin-right: 1.25rem;
    }
`;

export const InformationHeader = styled.h1`
    font-size: 1.25rem;

    @media only screen and (max-width: ${breakpoints.breakpointSmall}) {
        font-size: .75rem;
    }
`;

export const InformationInfo = styled.p`
    font-size: 1rem;

    @media only screen and (max-width: ${breakpoints.breakpointSmall}) {
        font-size: .6rem;
    }
`;

export const SocialContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;    
`;

export const Footer = styled.footer`
    color: white;
    text-align: center;
    font-size: 1rem;
    margin-top: 2rem;
`;
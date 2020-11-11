import styled, { css } from 'styled-components';

const baseInputStyles = css`
    background: inherit;
    outline: none;
    padding: .5rem;
    border: 1px solid transparent;
    border-bottom: .1rem solid white;
    transition: all .5s;
    font-family: inherit;
    font-size: 1rem;
    color: white;

    &:focus {
        border: .1rem solid white;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const FormLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
`;

export const FormRight = styled.div`
    width: 30%;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormLabel = styled.label`
    color: white;
    font-family: inherit;
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 1rem;
`;

export const FormInput = styled.input`
    ${baseInputStyles}
`;

export const FormTextarea = styled.textarea`
    ${baseInputStyles}
`;

export const FormButton = styled.button`
    cursor: pointer;
    display: block;
    outline: none;
    border: .2rem solid transparent;
    margin: 4rem auto;
    padding: 1rem 1.5rem;
    border-radius: .2rem;
    background-color: #FAC663;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    transition: all 1s;

    &:hover {
        background-color: white;
        color: #FAC663;
        border: .2rem solid #FAC663;
    }
`;
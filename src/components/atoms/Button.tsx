import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
    text: string;
    onClick: () => void;
    isActive?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, isActive }) => {
    return (
        <ButtonItem className={isActive ? 'active' : ''} onClick={onClick} title={text}>
            {text}
        </ButtonItem>
    );
};

export default Button

const ButtonItem = styled.button`
    background-color:${({ theme }) => theme.colors.text};;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 4px;

    &.active {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.text};
    }
    &:active {
        transform: scale(0.96);
    }
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary}22; /* Adding alpha to the hover background color */
        &.active {
            background-color: ${({ theme }) => theme.colors.primary}ff;
        } 
    }
`;
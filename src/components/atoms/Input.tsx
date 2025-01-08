import React from 'react';
import styled, { CSSObject } from 'styled-components';

type InputProps = {
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    css?: CSSObject
};

export const Input: React.FC<InputProps> = ({ placeholder, value, onChange, css }) => {
    return <InputStyle type="text" placeholder={placeholder} value={value} onChange={onChange} style={css} />;
};


const InputStyle = styled.input`
   font-family:${props => props.theme.fontfamily};
    &::placeholder {
     font-family: ${props => props.theme.fontfamily};
    }
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textInverted};
`
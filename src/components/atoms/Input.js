import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
export const Input = ({ placeholder, value, onChange, css }) => {
    return _jsx(InputStyle, { type: "text", placeholder: placeholder, value: value, onChange: onChange, style: css });
};
const InputStyle = styled.input `
   font-family:${props => props.theme.fontfamily};
    &::placeholder {
     font-family: ${props => props.theme.fontfamily};
    }
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textInverted};
`;

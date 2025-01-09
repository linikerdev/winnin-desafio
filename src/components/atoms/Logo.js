import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
const Logo = ({ css }) => {
    return (_jsxs("div", { style: { display: 'flex', alignItems: 'center' }, children: [_jsx(FontLogo, { className: 'firstSlice', "$css": css, children: "BUSC" }), _jsx(FontLogo, { className: 'endSlice', "$css": css, children: "ANIME" })] }));
};
export default Logo;
const FontLogo = styled.div `
    font-size: 40px;
    line-height: 50.2px;
    font-weight: 400;
    ${props => props.$css}
    &.firstSlice {
        color: ${props => props.theme.colors.text};
    }
    &.endSlice {
        color: ${props => props.theme.colors.secondary};
    }

`;

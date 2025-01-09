import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const TopBar = ({ children }) => {
    return (_jsx(TopBarContainer, { children: children }));
};
export default TopBar;
const TopBarContainer = styled.div `
    display: flex;
    background: ${props => props.theme.colors.primary};
    padding:10px;
    justify-content: center;
`;

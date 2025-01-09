import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../organisms/Header';
import Content from '../organisms/Content';
import Footer from '../organisms/Footer';
import styled from 'styled-components';
const MainLayout = () => {
    return (_jsxs(Layout, { children: [_jsx(Header, {}), _jsx(Content, {}), _jsx(Footer, {})] }));
};
export default MainLayout;
const Layout = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

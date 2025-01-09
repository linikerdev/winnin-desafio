import { jsx as _jsx } from "react/jsx-runtime";
import GridCards from './GridCards';
import { Container } from '../../style/GlobalStyle';
import styled from 'styled-components';
const Content = () => {
    return (_jsx(ContentMain, { children: _jsx(Container, { children: _jsx(GridCards, {}) }) }));
};
export default Content;
const ContentMain = styled.div `
  flex:1;
`;

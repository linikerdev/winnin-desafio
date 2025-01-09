import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import Logo from '../atoms/Logo';
const Footer = () => {
    return (_jsxs(FooterSlice, { children: [_jsx(Logo, { css: { fontSize: '20px !important', lineHeight: 1.3 } }), _jsx("p", { children: "TODOS OS DIREITOS RESERVADOS" })] }));
};
export default Footer;
const FooterSlice = styled.footer `
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

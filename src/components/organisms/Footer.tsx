import React from 'react';


const Footer: React.FC = () => {
  return (
    <FooterSlice>
      <Logo css={{ fontSize: '20px !important', lineHeight: 1.3 }} />
      <p>Todos os direitos reservados</p>
    </FooterSlice>
  );
};

export default Footer;

import styled from 'styled-components';
import Logo from '../atoms/Logo';

const FooterSlice = styled.footer`
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
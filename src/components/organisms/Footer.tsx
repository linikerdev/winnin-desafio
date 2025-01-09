import React from 'react';

import styled from 'styled-components';
import Logo from '../atoms/Logo';


const Footer: React.FC = () => {
  return (
    <FooterSlice>
      <Logo css={{ fontSize: '20px !important', lineHeight: 1.3 }} />
      <p>TODOS OS DIREITOS RESERVADOS</p>
    </FooterSlice>
  );
};

export default Footer;

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
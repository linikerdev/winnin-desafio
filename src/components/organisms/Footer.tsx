import React from 'react';

type FooterProps = {
  theme: 'light' | 'dark';
};

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={theme}>
      <p>BUSCANIME - Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;
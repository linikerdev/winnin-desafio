import React from 'react';
import Button from './Button';

interface NavMenuProps {
    items: { label: string; href: string, isActive: boolean }[];
}

const NavMenu: React.FC<NavMenuProps> = ({ items }) => {
    return (
        <Nav>
            {items.map((item, index) => (
                <li key={index}>
                    <Button isActive={item.isActive} text={item.label} onClick={() => null} />
                </li>
            ))}
        </Nav>
    );
};

export default NavMenu;

import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding: 1rem;
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 24px;
    padding: 0;
  
    @media (max-width: 768px) {
    margin: 24px auto;
    padding: 0;
    padding-left: 4rem;
    overflow-x: auto;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */

&::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}
}
`;
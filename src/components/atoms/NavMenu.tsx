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
`;
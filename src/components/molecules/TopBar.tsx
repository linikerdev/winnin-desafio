import React from 'react';
import styled from 'styled-components';

type TopBarProps = {
    children: React.ReactNode;
}

const TopBar = ({ children }: TopBarProps) => {
    return (
        <TopBarContainer>
            {children}
        </TopBarContainer>
    );
};

export default TopBar;



const TopBarContainer = styled.div`
    display: flex;
    background: ${props => props.theme.colors.primary};
    padding:10px;
    justify-content: center;
`;
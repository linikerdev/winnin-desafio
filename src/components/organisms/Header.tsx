import React, { useReducer } from 'react';
import SearchBar from '../molecules/SearchBar';
import styled, { useTheme } from 'styled-components';
import TopBar from '../molecules/TopBar';
import Logo from '../atoms/Logo';
import NavMenu from '../atoms/NavMenu';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';
import { Container } from '../../style/GlobalStyle';

type HeaderProps = {
    searchValue: string | undefined;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    onThemeToggle: () => void;
};

const Header: React.FC<HeaderProps> = ({ searchValue, onSearchChange, onSearch, onThemeToggle }) => {
    const theme = useSelector((state: RootState) => state.theme.theme);

    const itemMenu = [
        { label: 'Home', link: '/', isActive: true },
        { label: 'Home', link: '/', isActive: false },
        { label: 'Home', link: '/', isActive: false },
        { label: 'Home', link: '/', isActive: false },
        { label: 'Home', link: '/', isActive: false },
    ]
    return (
        <HeaderContainer>
            <TopBar>
                <LogoSlice>
                    <Logo />
                </LogoSlice>
                <ThemeSlice>
                    <Icon
                        icon={theme === 'light' ? "solar:moon-bold" : "solar:sun-bold"}
                        width="24"
                        height="24"
                        color={theme === 'light' ? "#000" : "#fff"}
                        onClick={onThemeToggle}
                        style={{ cursor: 'pointer' }}
                    />
                </ThemeSlice>
            </TopBar>
            <Container>
                <NavMenu items={itemMenu} />
                <SearchBar
                    placeholder="Digite algo aqui..."
                    value={searchValue}
                    onChange={onSearchChange}
                    onSearch={onSearch}
                />
            </Container>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.header``


const LogoSlice = styled.div`
display: flex;
justify-content: center;
flex:1
`
const ThemeSlice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    border: 1px solid ${props => props.theme.colors.textInverted};
    border-radius: 5px;
`
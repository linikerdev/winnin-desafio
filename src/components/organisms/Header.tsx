import React from 'react';
import SearchBar from '../molecules/SearchBar';
import styled from 'styled-components';
import TopBar from '../molecules/TopBar';
import Logo from '../atoms/Logo';
import NavMenu from '../atoms/NavMenu';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state';
import { Container } from '../../style/GlobalStyle';
import { changeTheme, setQuery, setSearch } from '../../state/anime/reducer';


const Header = () => {
    const dispatch = useDispatch();
    const { theme, search } = useSelector((state: RootState) => state.anime);


    const onThemeToggle = () => {
        dispatch(changeTheme());
    }

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value))
    }

    const onSearch = () => {
        const args = {
            page: 1,
            perPage: 12,
            search: search?.length === 0 ? null : search,
            format: undefined
        }
        dispatch(setQuery(args));
    }

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
                <NavMenu />
                <SearchBar
                    placeholder="Digite algo aqui..."
                    value={search}
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
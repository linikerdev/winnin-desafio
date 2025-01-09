import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import SearchBar from '../molecules/SearchBar';
import styled from 'styled-components';
import TopBar from '../molecules/TopBar';
import Logo from '../atoms/Logo';
import NavMenu from '../atoms/NavMenu';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../style/GlobalStyle';
import { changeTheme, setQuery } from '../../state/anime/reducer';
const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.anime.theme);
    const [searchValue, setSearchValue] = React.useState('');
    const onThemeToggle = () => {
        dispatch(changeTheme());
    };
    const onSearchChange = (e) => {
        setSearchValue(e.target.value);
    };
    const onSearch = () => {
        const args = {
            page: 1,
            perPage: 12,
            search: searchValue?.length === 0 ? null : searchValue,
            format: null
        };
        dispatch(setQuery(args));
    };
    return (_jsxs(HeaderContainer, { children: [_jsxs(TopBar, { children: [_jsx(LogoSlice, { children: _jsx(Logo, {}) }), _jsx(ThemeSlice, { children: _jsx(Icon, { icon: theme === 'light' ? "solar:moon-bold" : "solar:sun-bold", width: "24", height: "24", color: theme === 'light' ? "#000" : "#fff", onClick: onThemeToggle, style: { cursor: 'pointer' } }) })] }), _jsxs(Container, { children: [_jsx(NavMenu, {}), _jsx(SearchBar, { placeholder: "Digite algo aqui...", value: searchValue, onChange: onSearchChange, onSearch: onSearch })] })] }));
};
export default Header;
const HeaderContainer = styled.header ``;
const LogoSlice = styled.div `
display: flex;
justify-content: center;
flex:1
`;
const ThemeSlice = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    border: 1px solid ${props => props.theme.colors.textInverted};
    border-radius: 5px;
`;

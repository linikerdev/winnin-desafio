import React from 'react';
import SearchBar from '../molecules/SearchBar';

type HeaderProps = {
    searchValue: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    theme: 'light' | 'dark';
    onThemeToggle: () => void;
};

const Header: React.FC<HeaderProps> = ({ searchValue, onSearchChange, onSearch, theme, onThemeToggle }) => {
    return (
        <header className={theme}>
            <h1>BUSCANIME</h1>
            <SearchBar
                placeholder="Digite algo aqui..."
                value={searchValue}
                onChange={onSearchChange}
                onSearch={onSearch}
            />
            <button className="theme-toggle" onClick={onThemeToggle}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </header>
    );
};

export default Header;
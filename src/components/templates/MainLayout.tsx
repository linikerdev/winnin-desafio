import React from 'react';
import Header from '../organisms/Header';
import Content from '../organisms/Content';
import Footer from '../organisms/Footer';

type MainLayoutProps = {
    searchValue: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    animes: {
        id: number;
        image: string;
        title: string;
        tags: string[];
        rating: number;
    }[];
    theme: 'light' | 'dark';
    onThemeToggle: () => void;
};

const MainLayout: React.FC<MainLayoutProps> = ({ searchValue, onSearchChange, onSearch, animes, theme, onThemeToggle }) => {
    return (
        <div className={`layout ${theme}`}>
            <Header
                searchValue={searchValue}
                onSearchChange={onSearchChange}
                onSearch={onSearch}
                theme={theme}
                onThemeToggle={onThemeToggle}
            />
            <main className="main-container">
                <Content animes={animes} theme={theme} />
            </main>
            <Footer theme={theme} />
        </div>
    );
};

export default MainLayout;

import React from 'react';
import Header from '../organisms/Header';
import Content from '../organisms/Content';
import Footer from '../organisms/Footer';
import { Container } from '../../style/GlobalStyle';

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
    onThemeToggle: () => void;
    hasError: boolean
};

const MainLayout: React.FC<MainLayoutProps> = ({ searchValue, onSearchChange, onSearch, animes, onThemeToggle, hasError }) => {
    return (
        <div>
            <Container>
                <Header
                    searchValue={searchValue}
                    onSearchChange={onSearchChange}
                    onSearch={onSearch}
                    onThemeToggle={onThemeToggle}
                />
                <main className="main-container">
                    {hasError && <div>Aconteceu um erro, tente mais tarde.</div>}

                    {!hasError && <Content animes={animes} />}
                </main>
                <Footer />
            </Container>
        </div>
    );
};

export default MainLayout;

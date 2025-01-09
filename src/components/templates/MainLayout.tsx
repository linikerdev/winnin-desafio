import React from 'react';
import Header from '../organisms/Header';
import Content from '../organisms/Content';
import Footer from '../organisms/Footer';
import { AnimesState } from '../../interfaces/animes.interface';
import styled from 'styled-components';

type MainLayoutProps = {
    searchValue: string | undefined;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    animes: AnimesState[];
    onThemeToggle: () => void;
    hasError: boolean
};

const MainLayout: React.FC<MainLayoutProps> = ({ searchValue, onSearchChange, onSearch, animes, onThemeToggle, hasError }) => {

    return (
        <Layout>
            <Header
                searchValue={searchValue}
                onSearchChange={onSearchChange}
                onSearch={onSearch}
                onThemeToggle={onThemeToggle}
            />
            {hasError && <div>Aconteceu um erro, tente mais tarde.</div>}
            {!hasError && <Content animes={animes} />}
            <Footer />

        </Layout>
    );
};

export default MainLayout;


const Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
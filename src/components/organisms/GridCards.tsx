import React from 'react';
import styled from 'styled-components';
import AnimeCard from '../molecules/AnimeCard';
import { AnimesState } from '../../interfaces/animes.interface';

interface GridCardsProps {
    animes: AnimesState[];
}

const GridCards: React.FC<GridCardsProps> = ({ animes }) => {
    return (
        <GridContainer>
            {animes && animes.map(anime => (
                <AnimeCard
                    title={anime.title.romaji}
                    genres={anime.genres}
                    image={anime.coverImage.large}
                    rating={anime.averageScore}
                    id={anime.id}
                    key={anime.id}
                />
            ))}
        </GridContainer>
    );
};

export default GridCards;


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(317px, 1fr));
    gap: 8px;
    padding: 8px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        
    }
`;
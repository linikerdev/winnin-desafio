import styled from 'styled-components';
import AnimeCard from '../molecules/AnimeCard';
import { AnimeResponseState } from '../../interfaces/animes.interface';
import { useGetAnimesQuery } from '../../services/api';
import { RootState } from '../../state';
import { useSelector } from 'react-redux';


const GridCards = () => {
    const query = useSelector((state: RootState) => state.anime.query);
    const { data } = useGetAnimesQuery(query);
    const dataAnimes = data?.Page.media

    return (
        <GridContainer>
            {dataAnimes && dataAnimes.map((anime: AnimeResponseState) => (
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
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    gap: 10px;
    padding: 8px;
    max-width: 100%;
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;
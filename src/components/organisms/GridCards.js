import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import AnimeCard from '../molecules/AnimeCard';
import { useGetAnimesQuery } from '../../services/api';
import { useSelector } from 'react-redux';
const GridCards = () => {
    const query = useSelector((state) => state.anime.query);
    const { data } = useGetAnimesQuery(query);
    const dataAnimes = data?.Page.media;
    return (_jsx(GridContainer, { children: dataAnimes && dataAnimes.map((anime) => (_jsx(AnimeCard, { title: anime.title.romaji, genres: anime.genres, image: anime.coverImage.large, rating: anime.averageScore, id: anime.id }, anime.id))) }));
};
export default GridCards;
const GridContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(317px, 1fr));
    gap: 8px;
    padding: 8px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        
    }
`;

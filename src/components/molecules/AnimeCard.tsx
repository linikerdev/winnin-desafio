
import React from 'react';
import styled from 'styled-components';
import { Anime } from '../../interfaces/animes.interface';


const AnimeCard: React.FC<Anime> = ({ image, title, genres, rating }: Anime) => {
    return (
        <AnimeCardContainer $imageUrl={image}>
            <AnimeCardContent>
                <AnimeCardTitle>{title}</AnimeCardTitle>
                <AnimeCardBoxGenders>
                    {genres.map((gender, index) => (
                        <AnimeCardGender key={index}>
                            <AnimeCardGender>
                                {gender}
                            </AnimeCardGender>
                        </AnimeCardGender>
                    ))}
                </AnimeCardBoxGenders>
            </AnimeCardContent>
            <AnimeCardRate $rating={rating}>{rating}%</AnimeCardRate>
        </AnimeCardContainer>
    );
};

export default AnimeCard;

const AnimeCardContent = styled.div``

const AnimeCardContainer = styled.div<{ $imageUrl: string }>`
    width: 317px;
    height: 270px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
    background-image: url(${props => props.$imageUrl});
    background-size: cover;
    background-position: center;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    & > ${AnimeCardContent} {
        position: relative;
        z-index: 2;
    }
`;



const AnimeCardTitle = styled.div`
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    padding: 8px;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const AnimeCardBoxGenders = styled.div`
    display: flex;
    gap: 10px;
    overflow-x: auto;
    white-space: nowrap;
    &::-webkit-scrollbar {
        display: none;
    }
`

const AnimeCardGender = styled.div`
    background-color:  ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-weight: 400;
    padding: 3px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 4px;
    line-height: 15.06px;
`

const AnimeCardRate = styled.div<{ $rating: string }>`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    font-size: 24px;
    width: 68px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    z-index: 2;

    background-color: ${({ $rating }) => {
        if (parseInt($rating) < 50) return '#E92151';
        if (parseInt($rating) >= 50 && parseInt($rating) <= 80) return '#FFB800';
        return '#01ADA6';
    }};
`
// seguindo a regra: Abaixo de 50, vermelho, entre 50 e 80, amarelo, acima de 80, verde.


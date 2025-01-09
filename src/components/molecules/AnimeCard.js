import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
const AnimeCard = ({ image, title, genres, rating }) => {
    return (_jsxs(AnimeCardContainer, { "$imageUrl": image, children: [_jsxs(AnimeCardContent, { children: [_jsx(AnimeCardTitle, { children: title }), _jsx(AnimeCardBoxGenders, { children: genres.map((gender, index) => (_jsx(AnimeCardGender, { children: _jsx(AnimeCardGender, { children: gender }) }, index))) })] }), _jsxs(AnimeCardRate, { "$rating": rating || 0, children: [rating, "%"] })] }));
};
export default AnimeCard;
const AnimeCardContent = styled.div ``;
const AnimeCardContainer = styled.div `
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
   
@media (max-width: 768px) {
    
    width: auto;
    flex:1
}
`;
const AnimeCardTitle = styled.div `
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
`;
const AnimeCardBoxGenders = styled.div `
    display: flex;
    gap: 10px;
    overflow-x: auto;
    white-space: nowrap;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const AnimeCardGender = styled.div `
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
`;
const AnimeCardRate = styled.div `
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
    if ($rating < 50)
        return '#E92151';
    if ($rating >= 50 && $rating <= 80)
        return '#FFB800';
    return '#01ADA6';
}};
`;

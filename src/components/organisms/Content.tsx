import React from 'react';
import AnimeCard from '../molecules/AnimeCard';

type ContentProps = {
  animes: {
    id: number;
    image: string;
    title: string;
    tags: string[];
    rating: number;
  }[];
  theme: 'light' | 'dark';
};


const Content: React.FC<ContentProps> = ({ animes, theme }) => {
  return (
    <div className={`card-grid ${theme}`}>
      {animes.map((anime) => (
        <AnimeCard anime={anime} key={anime.id} />
      ))}
    </div>
  );
};

export default Content;

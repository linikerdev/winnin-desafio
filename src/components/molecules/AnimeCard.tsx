
import React from 'react';
import Image from '../atoms/Image';
import Tag from '../atoms/Tag';

type AnimeCardProps = {
    anime: {
        id: number;
        image: string;
        title: string;
        tags: string[];
        rating: number;
    };
};

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
    return (
        <div className="anime-card">
            <Image src={anime.image} alt={anime.title} />
            <div className="card-content">
                <div className="title">{anime.title}</div>
                <div className="tags">
                    {anime.tags.map((tag, index) => (
                        <Tag text={tag} key={index} />
                    ))}
                </div>
                <div className="rating">{anime.rating}%</div>
            </div>
        </div>
    );
};

export default AnimeCard;

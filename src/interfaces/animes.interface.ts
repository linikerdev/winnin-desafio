export interface Anime {
    id?: number;
    image: string;
    title: string;
    genres: string[];
    popularity: string;
    rating: number;
}

export interface AnimesState {
    id: number
    title: Title
    genres: string[]
    popularity: string;
    coverImage: CoverImage
}

export interface Title {
    romaji: string
    english: string
    native: string
}

export interface CoverImage {
    large: string;
    extraLarge: string
}

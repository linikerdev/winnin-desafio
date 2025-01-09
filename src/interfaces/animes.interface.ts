export interface Anime {
    id?: number;
    image: string;
    title: string;
    genres: string[];
    rating: number;
}

export interface AnimesState {
    id: number
    title: Title
    genres: string[]
    averageScore: number;
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


export interface AnimesProps {
    page: number
    perPage: number,
    genre_in?: string[] | null
    search?: string | null
  }
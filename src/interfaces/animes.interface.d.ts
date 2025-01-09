export interface Anime {
    id?: number;
    image: string;
    title: string;
    genres: string[];
    rating: number;
}
export interface AnimesProps {
    page: number;
    perPage: number;
    format?: FormatMedia;
    search?: string | null;
}
export interface AnimeState {
    theme: 'light' | 'dark';
    query: AnimesProps;
}
export interface AnimeResponseState {
    id: number;
    title: Title;
    genres: string[];
    averageScore: number;
    coverImage: CoverImage;
}
export interface Title {
    romaji: string;
    english: string;
    native: string;
}
export interface CoverImage {
    large: string;
    extraLarge: string;
}
export type FormatMedia = "TV" | "TVShort" | "Movie" | "Special" | "OVA" | "ONA" | "Music" | "Manga" | "Novel" | "OneShot" | null;

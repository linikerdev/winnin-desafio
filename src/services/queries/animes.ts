// filepath: /home/liniquersilva/projetos/liniker/winnin-desafio/src/queries/getAnimes.ts
import { gql, } from '@apollo/client';

export const GET_ANIMES = gql`
query GetAnimes($page: Int, $perPage: Int, $genreIn: [String], $search: String) {
  Page(page: $page, perPage: $perPage) {
    media(type: ANIME, genre_in: $genreIn, search: $search) {
      id
      title {
        romaji
        english
        native
      }
      genres,
      averageScore,
      coverImage {
        large,
        extraLarge
      },
    },
},
}
`
// filepath: /home/liniquersilva/projetos/liniker/winnin-desafio/src/queries/getAnimes.ts
import { gql, } from '@apollo/client';
export const GET_ANIMES = gql `
query GetAnimes($page: Int, $perPage: Int, $search: String, $format: MediaFormat) {
  # Define which variables will be used in the query (id)
  Page(page: $page, perPage: $perPage) {
    media(type: ANIME, search: $search, format: $format) {
      # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
      id
      title {
        romaji
        english
        native
      }
      genres
      coverImage {
        large,
        extraLarge
      }
      averageScore
    }
  }
}
`;

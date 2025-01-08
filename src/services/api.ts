import { createApi } from '@reduxjs/toolkit/query/react'
import { gql } from 'graphql-request'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'

export const postStatuses = ['draft', 'published', 'pending_review'] as const


export interface Pagination {
    page: number
    per_page: number
}

export const api = createApi({
    baseQuery: graphqlRequestBaseQuery({
        url: 'https://graphql.anilist.co',
    }),
    endpoints: (builder) => ({
        getAnimes: builder.query({
            query: ({ page, per_page }: Pagination) => ({
                document: gql`
                query GetAnimes($page: Int, $perPage: Int) {
                  Page(page: $page, perPage: $perPage) {
                    media(type: ANIME) {
                      id
                      title {
                        romaji
                        english
                        native
                      }
                      coverImage {
                        large
                      }
                    }
                  },
                  
                }
              `,
                variables: {
                    page,
                    per_page,
                },
            }),
        }),
    }),
})
export const { useGetAnimesQuery } = api
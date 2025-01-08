import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GET_ANIMES } from './queries/animes'

export const postStatuses = ['draft', 'published', 'pending_review'] as const


export interface Pagination {
  page: number
  perPage: number,
  genreIn?: string[] | null
  search?: string | null
}

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://graphql.anilist.co',
  }),
  endpoints: (builder) => ({
    getAnimes: builder.query({
      query: ({ page, perPage }: Pagination) => ({
        document: GET_ANIMES,
        variables: {
          page: Number(page),
          perPage: Number(perPage),
        },
      }),
    }),
  }),
})
export const { useGetAnimesQuery } = api
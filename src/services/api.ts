import { createApi } from '@reduxjs/toolkit/query/react'
import { gql } from 'graphql-request'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GET_ANIMES } from './queries/animes'

export const postStatuses = ['draft', 'published', 'pending_review'] as const


export interface Pagination {
  page: number
  per_page: number,
  genreIn?: string[]
  search?: string
}

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://graphql.anilist.co',
  }),
  endpoints: (builder) => ({
    getAnimes: builder.query({
      query: ({ page, per_page, genreIn, search }: Pagination) => ({
        document: GET_ANIMES,
        variables: {
          page,
          per_page,
          genreIn,
          search
        },
      }),
    }),
  }),
})
export const { useGetAnimesQuery } = api
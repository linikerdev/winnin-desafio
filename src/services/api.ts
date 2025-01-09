import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GET_ANIMES } from './queries/animes'
import { AnimesProps } from '../interfaces/animes.interface'

export const postStatuses = ['draft', 'published', 'pending_review'] as const

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://graphql.anilist.co',
  }),
  endpoints: (builder,) => ({
    getAnimes: builder.query({
      query: ({ page, perPage, search, genre_in }: AnimesProps) => ({
        document: GET_ANIMES,
        variables: {
          page: Number(page),
          perPage: Number(perPage),
          search,
          genre_in
        },
      }),

    }),
  }),
})
export const { useGetAnimesQuery } = api
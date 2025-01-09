import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { GET_ANIMES } from './queries/animes'
import { AnimesProps } from '../interfaces/animes.interface'

export const postStatuses = ['draft', 'published', 'pending_review'] as const

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://graphql.anilist.co', // poderia colocar em uma variavel de ambiente 
  }),
  reducerPath: 'api',
  endpoints: (builder,) => ({
    getAnimes: builder.query({
      query: ({ page, perPage, search, format }: AnimesProps) => ({
        document: GET_ANIMES,
        variables: {
          page: Number(page),
          perPage: Number(perPage),
          search,
          format
        },
      }),
    }),
    updateFormat: builder.mutation({
      query: ({ id, format }: { id: number, format: string }) => ({
        document: `
        mutation UpdateFormat($id: Int!, $format: String!) {
        UpdateAnime(id: $id, format: $format) {
          id
          format
        }
        }
      `,
        variables: {
          id,
          format
        },
      }),
    })
  }),
})
export const { useGetAnimesQuery } = api
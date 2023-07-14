import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GameInfo } from './dto/gameinfo'

// Set the environment variable REACT_APP_API_ENDPOINT appropraitely
// For testing on the same host with docker, you can use http://localhost:8000

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ENDPOINT,
  }),
  tagTypes: ['Game'],
  endpoints: (builder) => ({
    getGames: builder.query<Array<GameInfo>, void>({
      query: () => '/games',
    }),
	getGame: builder.query<GameInfo, string>({
		query: (id: string) => `/games/${id}`,
	}),
  }),
})
export const { useGetGamesQuery, useGetGameQuery } = apiSlice
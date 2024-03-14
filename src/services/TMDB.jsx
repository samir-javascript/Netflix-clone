import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const tmdbApiKey =  "1f0a93b6e9638fc8922904a0b647f23a" 

export const tmdbApi = createApi({
   reducerPath:'tmdbApi',
   baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
   endpoints: (builder)=> ({
         getMovies : builder.query({
            query: ({genreIdOrGategoryName,page, searchQuery})=> {
               if(genreIdOrGategoryName && typeof genreIdOrGategoryName === 'string') {
                  return `movie/${genreIdOrGategoryName}?page=${page}&api_key=${tmdbApiKey}`
               }
               if(genreIdOrGategoryName && typeof genreIdOrGategoryName === 'number') {
                  return `discover/movie?with_genres=${genreIdOrGategoryName}&page=${page}&api_key=${tmdbApiKey}`
               }
               if(searchQuery) {
                   return `search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`
               }
                 return `movie/popular?page=${page}&api_key=${tmdbApiKey}`
            } 
         }),
         getGenre: builder.query({
            query: ()=> `genre/movie/list?api_key=${tmdbApiKey}`
         }),
         getSingleMovie: builder.query({
            query: (id)=> `movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
         }),
         getRecommendedMovies: builder.query({
            query: ({movieId,listName})=> `/movie/${movieId}/${listName}?api_key=${tmdbApiKey}`
         }),
         getPersonDetails: builder.query({
            query: (id)=> `/person/${id}?api_key=${tmdbApiKey}`
         }),
         getPersonMovies: builder.query({
            query: ({page,id})=> `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`
         }),
         getUserSpecificMovies: builder.query({
           query: ({accountId,sessionId,listName,page}) => `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`
         }),
   })
})
export const { useGetMoviesQuery, useGetGenreQuery , useGetPersonMoviesQuery , 
   useGetSingleMovieQuery ,  useGetUserSpecificMoviesQuery, useGetRecommendedMoviesQuery,
    useGetPersonDetailsQuery} = tmdbApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const tmdbApiKey = ""
export const tmdbApi = createApi({
    reducerPath:"tmdbApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.themoviedb.org/3"}),
    endpoints: (builder)=> ({
        getMovies: builder.query({
            query:({genreIdOrGategoryName, searchQuery, page})=> {
               if(genreIdOrGategoryName && typeof genreIdOrGategoryName === "string") {
                return `discover/movie/${genreIdOrGategoryName}?page=${page}&api_key=${tmdbApiKey}`
               }if(genreIdOrGategoryName && typeof genreIdOrGategoryName === "number") {
                  return `discover/movie?with_genres=${genreIdOrGategoryName}&page=${page}&api_key=${tmdbApiKey}`
               }if(searchQuery) {
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
        getPersonDetails: builder.query({
             query:(id)=> `person/${id}?api_key=${tmdbApiKey}`
        }),
        getPersonMovies: builder.query({
             query: ({id,page})=> `/discover/movie?with_cart=${id}&page=${page}&api_key=${tmdbApiKey}`
        }),
        getRecommendedMovies: builder.query({
            query: ({movieId, listName})=> `/movie/${movieId}/${listName}?api_key=${tmdbApiKey}`
        })
    })
})






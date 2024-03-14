/* eslint-disable react/prop-types */


import { MovieContainer } from './styles'
import Movie from '../movie/Movie';
export default function MovieList ({movies, numberOfMovies, excludeFirst})  {
  const startFrom = excludeFirst ? 1 : 0;
  return (
    <MovieContainer container>
         {movies?.results.slice(startFrom,numberOfMovies).map((movie,i)=> (
             <Movie movie={movie} key={i} i={i} />
         ))}
    </MovieContainer>
  )
}



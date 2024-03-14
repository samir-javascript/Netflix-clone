import {useState} from 'react'

import { useGetMoviesQuery } from "../services/TMDB"
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import MovieList from '../components/movieList/MovieList'
import FeaturedCard from "../components/featuredCard/FeaturedCard"
import Pagination from "../components/Pagination"
export default function HomeMovies () {
  const [page,setPage] = useState(1)

   const { genreIdOrGategoryName , searchQuery} = useSelector((state)=> state.currentGenreOrCategory)
  const { data, isFetching,isError} = useGetMoviesQuery({page, genreIdOrGategoryName, searchQuery})
 
  if(isFetching) {
    return (
       <Box display={"flex"} justifyContent={'center'}>
           <CircularProgress size={'2.5rem'} />
       </Box>
    )
  }
  if(!data && data?.results.length === 0) {
    return (
       <Box display={'flex'} justifyContent={'center'}>
          <Typography>Something went wrong, <Button variant='outline' style={{textDecoration:'none'}} color='inherit' component={Link} to='/'></Button> try again 
          </Typography>
       </Box>
    )
  }
  if(isError) {
     return (
      <Box display={'flex'} justifyContent={'center'}>
      <Typography>Something went wrong, <Button variant='outline' style={{textDecoration:'none'}} color='inherit' component={Link} to='/'></Button> try again 
      </Typography>
   </Box>
     )
  }
  return (
      <div>
        <FeaturedCard movie={data?.results.length > 0 && data?.results[0]} />
         <MovieList movies={data} excludeFirst />
        { data?.results.length > 0 && (
 <Pagination setPage={setPage} currentPage={page} totalPages={data?.total_pages}  />
        )}
       
      </div>
  )
}













import { useParams, Link, useNavigate } from "react-router-dom"
import { useGetPersonDetailsQuery, useGetPersonMoviesQuery } from "../services/TMDB"
import { Box, Typography, Grid, Button, CircularProgress  } from "@mui/material"
import MovieList from "../components/movieList/MovieList"
import { useTheme } from '@mui/system'
import { Poster, GridContainerAround } from "./movieInfo/styles"
import { useState } from "react"
import { ArrowBack } from "@mui/icons-material"
import Pagination from '../components/Pagination'
const ActorDetailsPage = () => {
  const { id } = useParams()
  const theme = useTheme()
  const color = theme.palette.text.primary;
  const navigate = useNavigate()
  const [page,setPage] = useState(1)
  const {data: actorMovies} = useGetPersonMoviesQuery({id,page})
  const { data, isFetching, isError} = useGetPersonDetailsQuery(id)
  if(isFetching) {
    return (
       <Box display='flex' justifyContent='center'>
          <CircularProgress size="3rem" />
       </Box>
    )
  }
  if(isError) {
    return (
       <Box display='flex' justifyContent='center' alignItems="center" flexDirection="column">
           <Typography variant="h5" gutterBottom>
                something went wrong
           </Typography>
           <Link to='/'>
           <Button  variant="contained">
                 Go back
           </Button>
           </Link>
          
       </Box>
    )
  }
  console.log('ACTOR INFO', data)
  return (
    <GridContainerAround container>
       <Grid xs={12} lg={4} item>
            <Poster src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`} />
       </Grid>
       <Grid item container lg={7} direction="column">
           <Typography style={{marginTop:'10px'}} color={color} variant="h3" gutterBottom>
                 {data?.name}
           </Typography>
           <Typography variant="h5" gutterBottom>
              Born: {data?.birthday}
           </Typography>
           <Typography variant="body2" style={{marginBottom:'2rem'}}>
                   {data?.biography}
           </Typography>
           <Grid item container sx={{marginTop: '1rem'}}>
                     <Box marginTop='2rem' display={ 'flex'} width={'100%'} justifyContent={'space-around'}>
                     <Button variant='outlined' onClick={()=> navigate(-1) }  endIcon={<ArrowBack />}>
                    Back
                     </Button>
                    <Button variant='contained' color='primary'
                     target='_blank' rel='noreferrer' href={`https://www.imdb.com/name/${data?.imdb_id}`}           >
                       IMDB
                    </Button>
                     </Box>
                </Grid>
        </Grid> 
        <Box sx={{width:'100%', marginTop:'5rem'}}>
          <Typography variant="h3" color={color} align="center" gutterBottom>Movies</Typography>
             {actorMovies ? (
              <div>
                 <MovieList movies={actorMovies} numberOfMovies={12} /> 
                 <Pagination setPage={setPage} currentPage={page} totalPages={actorMovies?.total_pages} />
              </div>
              
             ): (
               <Typography variant="h5" gutterBottom style={{marginTop:'10px'}}>
                     No movie was found
               </Typography> 
             )}
        </Box>
    </GridContainerAround>
  )
}

export default ActorDetailsPage
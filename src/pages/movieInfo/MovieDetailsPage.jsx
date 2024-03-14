/* eslint-disable react/no-unescaped-entities */
import  {useState} from 'react'
import { Link, useParams , useNavigate} from 'react-router-dom'
import { useGetSingleMovieQuery, useGetRecommendedMoviesQuery } from '../../services/TMDB';
import { Box, Button, ButtonGroup, CircularProgress, Grid,  Rating, Typography } from '@mui/material';
import { BtnContainer, BtnsContainer, CastImage, GenreContainer,
    GridContainerAround, ImageGenre, LinkStyles, ModalStyles, Poster, VideoStyles } from './styles';
import genreIcons from '../../assets/genres/index'
import { selectGenreOrCategoryName } from '../../features/CurrentGenreOrCategory';
import { useDispatch  } from 'react-redux';
import { Language, ArrowBack, Favorite, PlusOne, Remove , Theaters ,
    Movie as MovieIcon , FavoriteBorderOutlined } from '@mui/icons-material';

import { useTheme } from '@mui/system';
import MovieList from '../../components/movieList/MovieList';
export default function MovieDetailsPage () {
    const theme = useTheme()
    const isWatchListed = true;
    const isFavorite = false;
     const dispatch = useDispatch()
     const navigate = useNavigate()
    
    // const [page,setPage] =  useState(1)
    
   const [open,setOpen] = useState(false)
   const color = theme.palette.text.primary;
  const { id } = useParams();
   
  
 // const { genreIdOrGategoryName } = useSelector((state)=> state.currentGenreOrCategory)
  const { data: recommendedMovies } = useGetRecommendedMoviesQuery({movieId: id , listName: 'recommendations'})
  const { data, isFetching, isError } = useGetSingleMovieQuery(id)
   
  
console.log(data, 'DATA')
   
    
 
  
   if(isFetching) {
    return (
       <Box display={'flex'} justifyContent={'center'}>
            <CircularProgress  size={'3rem'}/>
       </Box>
    )
   }
     if(isError) {
        return (
           <Box display={'flex'} justifyContent={'center'}>
                <Typography variant='h5'>something went wrong . <Button component={Link} to='/'
                 variant='outline' color='inherit'>try again</Button></Typography>
           </Box>
        )
     }
  return (
    <GridContainerAround container>
        <Grid item sm={12} lg={4}>
              <Poster  src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt={data?.title} />
        </Grid>
        <Grid item container lg={7} direction={'column'}>
              <Typography  align='center' color={color} variant='h3' gutterBottom> {data?.title}  {data?.release_date.split('-')[0]}  </Typography>
              <Typography align='center' gutterBottom variant='h5'> {data?.tagline} </Typography>
              <GridContainerAround item>
                  <Box display={'flex'} align={'center'}>
                  <Rating readOnly value={data?.vote_average / 2} />
                       <Typography variant='subtitle1' style={{marginLeft: '10px'}}> {data?.vote_average} / 10 </Typography>
                  </Box>
                  <Typography variant='h5' gutterBottom> {data?.runtime} min {`/${data?.spoken_languages[0].name}`} </Typography>
              </GridContainerAround>
              <GenreContainer>
                  {data?.genres.map((genre,i)=> (
                     <LinkStyles key={i} to='/' onClick={()=> dispatch(selectGenreOrCategoryName(genre.id)) }>
                          <ImageGenre width={'30px'} src={genreIcons[genre.name.toLowerCase()]} alt={genre.name} />
                          <Typography variant='subtitle1' color={color}>{genre?.name} </Typography>
                     </LinkStyles> 
                  ))}
              </GenreContainer>
              <Typography variant='h5' gutterBottom style={{marginTop:'10px'}}>Overview</Typography>
              <Typography  style={{marginBottom:'2rem'}}>{data?.overview} </Typography>
              <Grid item container spacing={2}>
                    {data && data.credits.cast.map((character,i)=> (
                        character.profile_path && 
                        <Grid  key={i} item xs={4} md={2} component={Link} to={`/actors/${character.id}`} style={{textDecoration: 'none'}}>
                              <CastImage  src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`}
                             alt={'character profile'} />
                             <Typography  color={'textPrimary'}>
                                  {character?.name}
                             </Typography>
                             <Typography  color={'textSecondary'}>
                                  {character?.character.split('/')[0]}
                             </Typography>
                        </Grid>
                       
                    )).slice(0,6)
                    }
              </Grid>
               <Grid item container style={{marginTop:'1rem'}} >
                   <BtnsContainer>
                       <BtnContainer>
                       <ButtonGroup sx={{marginTop: '20px'}} size='small' variant='outlined'>
                       <Button target='_blank' rel='noreferrer'  href={data?.homepage}
                                   endIcon={<Language />}>
                                      website
                                  </Button>
                                  <Button onClick={()=> setOpen(true) }  endIcon={<Theaters />}>
                                      Trailer
                                  </Button>
                                  <Button  target='_blank' rel='noreferrer' href={`https://www.imdb.com/title/${data.imdb_id}`}
                                   endIcon={<MovieIcon />}>
                                      IMDB
                                  </Button>
                              </ButtonGroup>
                              <ButtonGroup sx={{marginTop: '20px'}} size='small' variant='outlined'>
                                  <Button 
                                   endIcon={isFavorite ? <FavoriteBorderOutlined /> : <Favorite /> }>
                                      {isFavorite ? 'Unfavorite': 'Favorite'}
                                  </Button>
                                  <Button   endIcon={isWatchListed ? <Remove /> : <PlusOne /> }>
                                      Watchlist
                                  </Button>
                                  <Button onClick={()=> navigate(-1)}
                                   endIcon={<ArrowBack />}>
                                      Back
                                  </Button>
                              </ButtonGroup>
                       </BtnContainer>
                     </BtnsContainer>  
                  
                 </Grid>

                 
        </Grid>
        <Box sx={{marginTop: '5rem' , width: "100%"}}>
                      <Typography align='center' color={color} variant='h3' gutterBottom>You may also Like</Typography>
                       {recommendedMovies ? (
                          <MovieList numberOfMovies={12} movies={recommendedMovies}/>
                       ): (
                          <Typography variant={'h5'}>There's no recommended movies for {data?.title}</Typography>
                       )}
                 </Box>
                 <ModalStyles 
                   open={open}
                  onClose={()=> setOpen(false)}
                  closeAfterTransition
                 >
                    {data && data?.videos?.results.length > 0 && (
                         <VideoStyles src={`https://youtube.com/embed/${data?.videos?.results[0]?.key}`}  title='Trailer' allow='autoplay' frameBorder="0" />
                    )}
                 </ModalStyles>
    </GridContainerAround>
  )
}

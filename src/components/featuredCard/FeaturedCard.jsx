/* eslint-disable react/prop-types */

import { Box,  Button,  Card, CardMedia,  Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom'
import { CardContentStyles } from './styles';
const FeaturedCard = ({movie}) => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const truncate = (str,n)=> {
         return str.length > n ? str.substring(0,n) + '...' : str
    }
    if(!movie) {
       return (
        <Box display="flex" justifyContent="center" marginTop="40px" alignItems="center" flexDirection="column">
          <Typography variant='h5' gutterBottom>
            No movies was found.
           Please search for something else 🎥
        </Typography>
        <Button style={{marginTop:'16px'}} type="button" onClick={()=> window.location.reload()} variant="contained">
            try again
        </Button>
        </Box>
        
       
       )
    }
  return (
    <Box sx={isSmallScreen ? {marginTop: '30px'} : ""} 
    className='featured-container' component={Link} to={`/movies/${movie?.id}`}>
         <Card className='featured-card'>
         <CardMedia className='card-media' alt={movie?.title}
        title={movie?.title}
         media='picture'
         width='360px'
         image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} />
              <Box padding={'20px'}>
                <CardContentStyles>
                   <Typography gutterBottom variant='h5'>{movie?.title}</Typography>
                   <Typography variant='body2'>{truncate(movie?.overview,155)}</Typography>
                </CardContentStyles>
               </Box>   
         </Card>
    </Box>
  )
}

export default FeaturedCard
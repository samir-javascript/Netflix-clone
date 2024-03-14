
import { Grid, Modal } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
export const GridContainerAround = styled(Grid)(({ theme }) => ({
     display:'flex',
     justifyContent:'space-around',
     gap: '5px',
     margin: '10px 0 !important',
     [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        flexWrap: 'wrap'
     }
 }));
 export const ModalStyles = styled(Modal)(({ theme }) => ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}));
export const VideoStyles = styled('iframe')(({ theme }) => ({
   width: '50%',
   height:'50%', 
   [theme.breakpoints.down('sm')]: {
      width:'90%',
      height: '90%'
   }
}));
 export const Poster = styled('img')(({ theme }) => ({
     display:'flex',
     margin: '0 auto !important',
     marginBottom: '30px',
     borderRadius: '20px',
     boxShadow: theme.palette.mode === 'light' ? '0.5em 1em 1em rgb(67,67,70)' : 'none',
     objectFit: 'cover',
     width :'80%'
}));


export const GenreContainer = styled(Grid)(({ theme }) => ({
    display:'flex',
    justifyContent: 'space-around',
    margin: '10px 0 !important',
    flexWrap: 'wrap'
}));

export const LinkStyles = styled(Link)(({ theme }) => ({
    display:'flex',
    justifyContent: 'center',
    alignItems :'center',
     color: '#000',
     textDecoration: 'none',
     [theme.breakpoints.down('sm')]: {
         padding: '0.5rem 1rem'
     }
}));

export const ImageGenre = styled("img")(({ theme }) => ({
    filter : theme.palette.mode === 'dark' ? 'invert(1)' : 'brightness(1.2)',
    marginRight: '10px',
   }));

   export const CastImage = styled("img")(({ theme }) => ({
   width: '100%',
   maxWidth : '7rem',
   height: '8rem',
   borderRadius: '10px',
   objectFit: 'cover'
   }));
   export const BtnsContainer = styled("div")(({ theme }) => ({
    width: '100%',
     display:'flex',
     justifyContent: 'space-around',
     flexWrap: 'wrap',
     [theme.breakpoints.down('md')] : {
         flexDirection: 'column',
         flexWrap: 'wrap',
         justifyContent: 'center'
     }
    }));
    export const BtnContainer = styled(Grid)(({ theme }) => ({
        width: '100%',
         display:'flex',
         justifyContent: 'space-around',
         flexWrap: 'wrap',
         [theme.breakpoints.down('md')] : {
             flexDirection: 'column',
             flexWrap: 'wrap',
             justifyContent:'center'
         }
        }));
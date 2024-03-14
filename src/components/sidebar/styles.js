
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
export const LinkStyles = styled(Link)(({ theme }) => ({
    color: '#000',
     textDecoration: 'none'
 }));
 export const ImageGenre = styled('img')(({ theme }) => ({
     filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'brightness(1.2)'
 }));
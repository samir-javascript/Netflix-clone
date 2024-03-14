
import { CardContent } from '@mui/material';
import { styled } from '@mui/system';

export const CardContentStyles = styled(CardContent)(({ theme }) => ({
     position: 'absolute',
     zIndex: '999',
     bottom : '7%',
     width : '40%',
     color: '#fff',
     cursor: 'default',
     [theme.breakpoints.down('lg')]: {
        width: '70%',
     },
     [theme.breakpoints.down('md')]: {
        width: '90%',
     },
     [theme.breakpoints.down('sm')] : {
        width: '95%'
     }
 }));
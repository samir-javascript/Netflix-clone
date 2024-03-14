

import { styled } from '@mui/system';

import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Title = styled(Typography)(({ theme }) =>({
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: '0',
    textAlign: 'center',
    width: '230px',
    whiteSpace: 'nowrap',
    textDecoration: 'none'
}));
export const LinkStyles = styled(Link)(({ theme }) =>({
     alignItems: 'center',
     fontWeight: 'bolder',
     textDecoration: 'none',
     [theme.breakpoints.up('xs')]: {
        display: 'flex',
        flexDirection: 'column'
     },
     '&:hover':{
        cursor: 'pointer',
        textDecoration: 'none'
     }

}));

export const Poster = styled('img')(({ theme }) =>({
   height: '300px',
   borderRadius: '20px',
   marginBottom: '10px',

    '&:hover':{
       transform: 'scale(1.05)'
    }

}));

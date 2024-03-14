import { Stack } from '@mui/material';
import { styled } from '@mui/system';

export const StackStyles = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width:"100%",
       
        display:'flex'
    }
 }));
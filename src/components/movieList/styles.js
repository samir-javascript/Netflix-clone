import { Grid } from "@mui/material";
import { styled} from '@mui/system'
export const MovieContainer = styled(Grid)(({ theme }) => ({
   display:'flex',
   flexWrap: 'wrap',
   justifyContent:'space-between',
   [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
   }
}));


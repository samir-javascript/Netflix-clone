import { styled } from '@mui/system';
import { IconButton, Toolbar } from "@mui/material";
import { useLocation } from 'react-router-dom';
const drawerWidth = 240;
export const ToolbarStyles = styled(Toolbar)(({ theme }) => {
    const { pathname} = useLocation()
    const isHome = pathname === '/';
      return {
        display:'flex',
        justifyContent:'space-between',
        height:'80px',
        marginLeft: '240px',
        [theme.breakpoints.down('sm')]: {
           marginLeft: '0',
           flexWrap: 'wrap',
           height: isHome ? '120px' : '80',
        }
      }
    
 });
 export const IconButtonStyles = styled(IconButton)(({ theme }) => ({
    marginRight: theme.spacing(2)
}));
export const NavDrawerStyles = styled('nav')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
    },
    "& .paper": {
       width: drawerWidth
    }
}));
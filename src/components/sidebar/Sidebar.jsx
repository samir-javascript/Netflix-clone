// eslint-disable-next-line
import React, {useEffect} from 'react'
//import genreIcons from '../../assets/genres/index'
import { List, Divider, ListItem, Box, CircularProgress, ListItemText, ListSubheader, ListItemIcon,  } from '@mui/material'
import { useTheme } from '@mui/system';
import { Link } from 'react-router-dom';
import {  ImageGenre, LinkStyles } from "./styles"
import { useGetGenreQuery  } from '../../services/TMDB';
import { useDispatch, useSelector } from 'react-redux';
import genreIcons from '../../assets/genres/index'
import { selectGenreOrCategoryName } from "../../features/CurrentGenreOrCategory"
// eslint-disable-next-line react/prop-types
export default function Sidebar ({setMobileOpen})  {
    const dispatch = useDispatch()
  
    const { genreIdOrGategoryName } = useSelector((state)=> state.currentGenreOrCategory)
     const {data } = useGetGenreQuery()
    const theme = useTheme()
    const color = theme.palette.mode === 'dark' ? 'white' : 'black'
 
   
    
     useEffect(() => {
         setMobileOpen(false)
     }, [genreIdOrGategoryName, setMobileOpen])
     
     const categories = [{label: 'Top Rated', value: 'top_rated'},
     {label: 'Popular', value: 'popular'},
     {label: 'Upcoming', value: 'upcoming'},
]
  
  return (
    <>
       <Link  to='/' className='image-link'>
         <img style={{width:"240px" , height: "70px", objectFit:"contain"}} src={"https://about.netflix.com/images/logo.png"} alt="Netflix" />
       </Link>
       <Divider />
       <List>
           <ListSubheader>
               Categories
           </ListSubheader>
           {categories.map(({label,value})=> (
                <LinkStyles key={value} to='/'>
                     <ListItem  onClick={()=> dispatch(selectGenreOrCategoryName(value))} button>
                        <ListItemIcon>
                            <ImageGenre className='!w-[30px] ' src={genreIcons[label.toLocaleLowerCase()]} width={30} alt="genre img" />
                        </ListItemIcon>
                        <ListItemText sx={{color: `${color}`}} primary={label}/> 
                     </ListItem>
                </LinkStyles>
           ))}
       </List>
       <Divider />
        <List>
             <ListSubheader>Genres</ListSubheader>
                 {data ?  data?.genres?.map(({name,id})=> (
                     <LinkStyles to='/' key={id}>
                         <ListItem onClick={()=> dispatch(selectGenreOrCategoryName(id))} button>
                           <ListItemIcon>
                               <ImageGenre  className='!w-[30px] ' src={genreIcons[name.toLowerCase()]} alt={name} width={30} />
                           </ListItemIcon>
                           <ListItemText sx={{color: `${color}`}} primary={name} />
                         </ListItem>
                     </LinkStyles>
                 )): (
                     <Box display="flex" justifyContent="center">
                           <CircularProgress size={"4rem"} />
                     </Box>
                 )}
        </List>
    </>
  )
}

import {  Brightness4, Brightness7 } from "@mui/icons-material";
import { AppBar,  Drawer, IconButton,  useMediaQuery } from "@mui/material";
import { useContext, useState } from "react";
import { Menu } from "@mui/icons-material"; 
//import { useDispatch, useSelector } from "react-redux";
import { IconButtonStyles, NavDrawerStyles, ToolbarStyles } from "./styles"


import Sidebar from "../sidebar/Sidebar";
import { useTheme } from "@mui/system";
import { ColorModeContext } from "../../utils";
import SearchComponent from "../search/Search";
import { SignedIn, UserButton } from "@clerk/clerk-react";
const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
 // const dispatch = useDispatch()
  const theme = useTheme()

  const [mobileOpen,setMobileOpen] = useState(false)

  const colorMode = useContext(ColorModeContext)
  
  return (
    <>
       <AppBar position='fixed'>
          <ToolbarStyles>
               {isMobile && (
                  <IconButtonStyles className="!w-[30px] !text-white" edge='start'  style={{outline: 'none',width:"30px", color:"white"}}
                   color='inherit' onClick={()=> setMobileOpen(true)}>
                       <Menu fontSize="30px" />
                  </IconButtonStyles>
               )}
               <IconButton onClick={colorMode.toggleMode} color='inherit' sx={{ml: '1'}}>
                   {theme.palette.mode === "light" ? <Brightness4 /> : <Brightness7 />}
               </IconButton>
                {!isMobile && <SearchComponent />}
                  <div>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                     
                  </div> 
                   {isMobile && <SearchComponent />}
          </ToolbarStyles>
       </AppBar>
         <div>
             <NavDrawerStyles>
                {isMobile ? (
                      <Drawer
                        open={mobileOpen}
                        onClose={()=> setMobileOpen(prev => !prev)}
                        anchor='right'
                        variant="temporary"
                        ModalProps={{keepMounted:true}}
                        classes={{ paper: 'MuiDrawer-paper' }}
                      >
                          <Sidebar setMobileOpen={setMobileOpen} />
                      </Drawer>
                ) : (
                  <Drawer
                  open
                  classes={{ paper: 'MuiDrawer-paper' }}
                  variant='permanent'
                 
                >
                    <Sidebar setMobileOpen={setMobileOpen} />
                </Drawer>
                )}
             </NavDrawerStyles>
         </div>
    </>
  )
}

export default Navbar
/* eslint-disable react/prop-types */
import { Box, Typography, Button } from "@mui/material"
import { useTheme } from '@mui/system'
const Pagination = ({currentPage, setPage, totalPages}) => {
    const theme = useTheme()
    const color = theme.palette.text.primary;
    const handlePrev = ()=> {
         if(currentPage === 1) return null;
         setPage((prevPage)=> prevPage - 1)
    }
    const handleNext = ()=> {
        if(currentPage === totalPages) return null;
        setPage((prevPage)=> prevPage + 1)
    }
  return (
    <Box display='flex' justifyContent="center" alignItems="center" width='100%' marginTop='3rem'>
          <Button type="button" color="primary" onClick={handlePrev} variant="contained" style={{margin:'30px 2px'}}>Prev</Button>
          <Typography color={color} variant="h5" margin="0 20px">
             {currentPage}
          </Typography>
          <Button color='primary' type='button' onClick={handleNext} variant="contained" style={{margin:'30px 2px'}}>Next</Button>
    </Box>
  )
}

export default Pagination
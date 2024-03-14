/* eslint-disable react/react-in-jsx-scope */

import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';



//import { HomeMovies, MovieDetailsPage, ProfilePage, ActorDetailsPage } from "./pages/index";
import Header from './components/Header';
import { ActorDetailsPage, HomeMovies, MovieDetailsPage } from './pages';
import Navbar from './components/navbar/Navbar';
import { SignedOut, useAuth } from '@clerk/clerk-react';

export default function App() {

  const  { userId } = useAuth()
  return (
    <>
      <SignedOut>
          <Header />
      </SignedOut>
       {userId &&  (
  <div className='root'>
  <CssBaseline />
  <Navbar />
  <main className='content'>
    <div className='toolbar' />

    <Routes>
      <Route  path={'/'} element={<HomeMovies />} />
    
      <Route path='/movies/:id' element={<MovieDetailsPage />} />
      
      <Route path='/actors/:id' element={<ActorDetailsPage />} />
    </Routes>
  </main>

  
</div>
       )}
      
      
    </>
  );
}

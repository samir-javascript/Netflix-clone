/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import {
  ClerkProvider,
  SignIn,
  SignUp,
  SignedIn,
  useUser,
} from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeMovies from './pages/HomeMovies.jsx';
import ToggleColorModeProvider from './utils/index.jsx';
import { store } from './store.jsx';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const AuthenticatedRoutes = () => {
  const user = useUser();

  return (
    <SignedIn>
      {user ? (
        <Routes>
          <Route path="/" element={<HomeMovies />} />
        </Routes>
      ) : null}
    </SignedIn>
  );
};

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      requireUser
      clerk={{
        frontendApi: 'https://api.clerk.dev',
        onSignOut: () => navigate('/'), // Redirect to home page after signing out
      }}
    >
      <Routes>
        <Route index path="*" element={<App />} />
        <Route path="/sign-in" element={<div className='sign-in-container'><SignIn /></div> } />
        <Route path="/sign-up" element={<div className='sign-in-container'><SignUp /></div> } />
        <Route
          path="*/"
          element={<AuthenticatedRoutes />}
        />
      </Routes>
    </ClerkProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleColorModeProvider>
        <BrowserRouter>
          <ClerkWithRoutes />
        </BrowserRouter>
      </ToggleColorModeProvider>
    </Provider>
  </React.StrictMode>
);

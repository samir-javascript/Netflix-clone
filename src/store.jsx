import { configureStore } from '@reduxjs/toolkit'
import { tmdbApi} from './services/TMDB'
import genreOrCategoryReducer from "./features/CurrentGenreOrCategory"
//import authSliceReducer from './features/authenticate'
export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory : genreOrCategoryReducer,
    //auth : authSliceReducer
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(tmdbApi.middleware),
  devTools: true
})
import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name: 'genreOrCategory',
    initialState: {
        genreIdOrGategoryName: '',
        page: 1,
        searchQuery: ''
    },
    reducers: {
        selectGenreOrCategoryName: (state,action)=> {

            state.genreIdOrGategoryName = action.payload;
            state.searchQuery = ''
        },
        searchMovie: (state,action)=> {
             state.searchQuery = action.payload;
        }
    }
})
export const { selectGenreOrCategoryName , searchMovie} = genreOrCategory.actions;
export default genreOrCategory.reducer;

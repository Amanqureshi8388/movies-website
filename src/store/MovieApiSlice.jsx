import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";




 const STATUS = {
    IDLE:'idle',
    LOADING:'loading',
    ReJECT:'reject'
}

const MovieApi = createSlice({
    name:'MovieApi',
    initialState:{
        isLoading:false,
        data:[],
        singlemovie:[],
        movieSearcher:''

    },
    reducers:{
        searcher(state,{payload}){
           state.movieSearcher = payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchMovieApi.pending, (state,action)=>{
             state.isLoading = false
        })
        .addCase(fetchMovieApi.fulfilled, (state,action)=>{
            state.data = action.payload
            state.isLoading = true
       })
       .addCase(fetchMovieApi.rejected,( state,action)=>{
           state.status = STATUS.ReJECT
       } )

            //    singleMovie
            
            
       .addCase(fetchsingleMovieApi.fulfilled,( state,action)=>{
         state.isLoading = false
         state.singlemovie = action.payload
       } )
       .addCase(fetchsingleMovieApi.pending,( state,action)=>{
        state.isLoading = true
       } )
    }
})


export const {searcher} = MovieApi.actions
export default MovieApi.reducer

export const fetchMovieApi = createAsyncThunk('Movie/fetch', async (term)=>{
    const response = await fetch(`http://www.omdbapi.com/?apikey=c89b48a3&s=${term}`);
    const fetchData = await response.json()
    return fetchData
})  

export const fetchsingleMovieApi = createAsyncThunk('Movie/fetchsingleMovie', async (id)=>{
    const response = await fetch(`http://www.omdbapi.com/?apikey=c89b48a3&i=${id}&Plot=full`);
    const fetchData = await response.json()
    return fetchData
}) 

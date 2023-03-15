import { configureStore } from '@reduxjs/toolkit'
import MovieApi from './MovieApiSlice'

const store = configureStore({
    reducer:{
        MovieApi : MovieApi,
    }
})

export default store

import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Movies from '../components/Movies'
// import MovieSlider from '../components/movieSlider/MovieSlider'
import Search from '../components/Search'
import { fetchMovieApi } from '../store/MovieApiSlice'

const Home = () => {

  return (
    <>
    {/* <MovieSlider/> */}
    <Search/>
    <Movies/>
    </>
  )
}

export default Home
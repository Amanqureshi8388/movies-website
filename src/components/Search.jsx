import React from 'react'
import './Search.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieApi, searcher } from '../store/MovieApiSlice'
import { useEffect } from 'react'
import {BiCameraMovie} from 'react-icons/bi'
import {SiThemoviedatabase} from 'react-icons/si'

const Search = () => {
  const {data , movieSearcher } = useSelector((state) => state.MovieApi)
  const Dispatch = useDispatch()  
    const text = 'harry'

    
    useEffect(()=>{
      if(movieSearcher === ''){
        Dispatch(fetchMovieApi(text))
      }else{
        Dispatch(fetchMovieApi(movieSearcher))
      }
    },[Dispatch,movieSearcher])

  return (
    <>
         <div className="search-section">
          <div className="container">
          <div className='search-bar flex gap-5 justify-between items-center'>
          <div className='logo'><SiThemoviedatabase className=' text-5xl'/></div>
        <form className=' w-full md:w-2/3'>
            <input type="text" value={movieSearcher} placeholder='search here' onChange={(e)=> Dispatch(searcher(e.target.value))} />a
        </form>
        </div>
        </div>
    </div>
    <div className='movieError'>{!data.Error ? '' : 'Movie not found'}</div>
    </>
  )
}

export default Search
import React from 'react'
import './Movies.scss'
import {NavLink} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {fetchMovieApi} from '../store/MovieApiSlice'
import Loader from './helper/Loader'


const Movies = () => {
    const Dispatch = useDispatch()
    const {data , isLoading  } = useSelector((state) => state.MovieApi)
    const {Search} = data
    useEffect(() => { 
      const movieText = 'Harry'
      Dispatch(fetchMovieApi(movieText))
    },[Dispatch])
    
    
  return (
    <>
    {
     !isLoading ? <Loader/> :
       <div className="wrapper container ">
        <div className="grid-div grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-between gap-10">

       {
         Search && Search.map((movies,i)=>{
           const  { imdbID,Title,Poster} = movies
            return( 
              <div className="main-box" key={i} >
              <NavLink to={`movie/${imdbID}`} className='box ' key={i} >
               <div className="card">
                  <img src={Poster} alt="" />
               </div>
               </NavLink>
               </div>
            )
          })
       }
        </div>
      </div>
    }
    </>
  )
}


export default Movies
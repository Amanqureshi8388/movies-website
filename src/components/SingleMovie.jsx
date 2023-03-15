import React from "react";
import "./SingleMovie.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchsingleMovieApi } from "../store/MovieApiSlice";
import Loader from "./helper/Loader";

const SingleMovie = () => {
  const { id } = useParams();
  const Dispatch = useDispatch();
  const { singlemovie, isLoading } = useSelector((state) => state.MovieApi);

  useEffect(() => {
    let timeout = setTimeout(() => {
      Dispatch(fetchsingleMovieApi(id));
    }, 500);
    return () => clearTimeout(timeout);
  }, [Dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="singleMovie sm:flex ">
            <div className="left">
              <img src={singlemovie.Poster} alt="" />
            </div>
            <div className="right">
              <h1>{singlemovie.Title}</h1>
              <ul>
                <li>IMDB Rating : {singlemovie.imdbRating}</li>
                <li>IMDB VOTES : {singlemovie.imdbVotes}</li>
                <li>RUNTIME : {singlemovie.Runtime}</li>
                <li>Year : {singlemovie.Year}</li>
              </ul>
              <div className="">
                <p className="actor details">
                  <span>CAST :</span>
                  {singlemovie.Actors}
                </p>
                <p className="director details">
                  <span>DIRECTOR :</span> {singlemovie.Director}
                </p>
                <p className="genre details">
                  <span>GENRE :</span>
                  {singlemovie.Genre}
                </p>
                <p className="release details">
                  <span>RELEASE :</span>
                  {singlemovie.Released}
                </p>
                <p className="language details">
                  <span>Language :</span>
                  {singlemovie.Language}
                </p>
                <div className="plot details">
                  <span>PLOT :</span>
                  {singlemovie.Plot}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;

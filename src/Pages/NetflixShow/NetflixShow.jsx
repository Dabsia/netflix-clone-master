import React from "react";
import MovieRow from "../../components/MovieRow/MovieRow";
import requests from "../../Requests";
import './NetflixShow.css'

const NetflixShow = () => {

  return (
    <div className="moviesHolder">
      <div className='movie_container'>
        <h1 className='movie_container__text'>Movies</h1>
        <p className='movie_container__desc'>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>

      </div>
      <MovieRow title = 'Trending' requestGenre = {requests.fetchTrending} />
      <MovieRow title = 'Horror' requestGenre = {requests.fetchHorrorMovies}/>
      <MovieRow title = 'Netflix Originals' requestGenre = {requests.fetchNetflixOriginals} />
      <MovieRow title = 'Top Rated' requestGenre = {requests.fetchTopRated}/>
      <MovieRow title = 'Action' requestGenre = {requests.fetchActionMovies}/>
      <MovieRow title = 'Comedy' requestGenre = {requests.fetchComedyMovies}/>
      <MovieRow title = 'Romance' requestGenre = {requests.fetchRomanceMovies}/>
      <MovieRow title = 'Documentaries' requestGenre = {requests.fetchDocumentaries}/>
    </div>
  );
};

export default NetflixShow;

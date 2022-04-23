import React, {useEffect, useState} from 'react'
import {initialURL} from "../../Requests";
import './MovieRow.css'

const MovieRow = ({title, requestGenre}) => {

    const [movies, setMovies] = useState([])

    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

    useEffect(() => {
        fetch(`${initialURL}${requestGenre}`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
      }, [requestGenre])
      
  return (
      
    <div className='movieHolder'>
        <h3>{title}</h3>
        <div className = 'movieItem'>
        {
            movies.map(movie => {
                return (
                        <div className='movie' key = {movie.id}>
                            <div className='image'>
                                <img  src = {`${IMG_PATH}${movie.poster_path}`} alt = {movie.original_title}/>
                            </div>
                            <p>{movie.original_title}</p>
                        </div>
                    
                )
            })
        }
        </div>
    </div>
  )
}

export default MovieRow
import React, {useEffect, useState} from 'react'
import {initialURL} from "../../Requests";
import { useNavigate } from 'react-router-dom';
// import YouTube from 'react-youtube'

import './MovieRow.css'

const MovieRow = ({title, requestGenre}) => {
    const navigate = useNavigate()
    const [movies, setMovies] = useState([]);
    // const [trailerUrl, setTrailerUrl] = useState('')

    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

    useEffect(() => {
        fetch(`${initialURL}${requestGenre}`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
      }, [requestGenre])

      

//   const opts = {
//     height: '390',
//     width: '100%',
//     playerVars: {
//         autoplay: 1
//     }
// }

// const handleClick = (movie) => {
//     if (trailer) {
//         setTrailerUrl('')
//     }
//     else{
//         movieTrailer(movie?.name || '' )
//         .then(url => {
//             const urlParams = new URLSearchParams(new URL(url).search) ;
//             urlParams.get('v');
//         }).catch(err => console.log(err))
//     }
// }
    
    
      
  return (
      
    <div className='movieHolder'>
        <h3>{title}</h3>
        <div className = 'movieItem'>
        {
            movies.map(movie => {
                return (
                    <div className='movie' onClick={()=> navigate(`/movie`)} key = {movie.id}>
                        <div className='image'>
                            <img src = {`${IMG_PATH}${movie.poster_path}`} alt = {movie.original_title}/>
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
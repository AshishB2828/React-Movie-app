import React from 'react'
import { IMAGE_API_KEY } from '../API/api'

const Movies = ({title, poster_path, overview, vote_average}) => {
    return (
        <div className="movie">
        <img src={IMAGE_API_KEY+poster_path} alt={title}/>
         <div className="movie-info">
             <h3>{title}</h3>
             <span className={`tag ${vote_average>=8?"green":vote_average>=6?"orange":"red"}`}>
             {vote_average}</span>
         </div>  
         <div className="movie-over">
             <h2>Overview:</h2>
             <p>{overview}</p>
         </div> 
        </div>
    )
}

export default Movies

import React, { useEffect, useState } from 'react'
import Movies from './Components/Movies'
import MoviesApi from './API/api'
import axios from 'axios'


const App = () => {
const [movies, setMovies] = useState([])
const [search, setSearch] = useState('')

const retrieveMovies = async(API) =>{
    try {
        const {data:{results}} = await axios.get(API)
        setMovies(results)
    } catch (error) {
      console.log(error)
    }
}
const handleSubmit = (e) => {
  e.preventDefault();
  retrieveMovies(MoviesApi.searchApi+search)
}
useEffect( ()=>{
  retrieveMovies(MoviesApi.featuredMovies)
},[])
  return (
    <>
    {movies?<>
      <header>
      <div className="header-options">
        <p onClick={()=>retrieveMovies(MoviesApi.fetchTrending)}>TopRated</p>
        <p onClick={()=>retrieveMovies(MoviesApi.fetchActionMovies)}>Action</p>
        <p onClick={()=>retrieveMovies(MoviesApi.fetchComedyMovies)}>Comedy</p>
        <p onClick={()=>retrieveMovies(MoviesApi.fetchRomanceMovies)}>Romance</p>
        <p onClick={()=>retrieveMovies(MoviesApi.fetchSciFiMovies)}>Sci-Fi</p>
      </div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="search" className="search" onChange={(e)=>setSearch(e.target.value)}/>
    </form>
    </header>
    <div className="movie-container">
     {
       movies.map(movie=> <Movies key={movie.id}{...movie}/>)
     }
    </div>
    </>:<div>Loading....</div>}
    </>
  )
}

export default App

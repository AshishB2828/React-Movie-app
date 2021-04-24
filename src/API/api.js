export const IMAGE_API_KEY = "https://image.tmdb.org/t/p/w1280"

const API_KEY = ''

export default{
    featuredMovies: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=ens-US`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/all/top_rated?api_key=${API_KEY}&language=ens-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27` ,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMysteryMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648` ,
    fetchSciFiMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchAnimationMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchWesternMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`,
    imageApi: `https://image.tmdb.org/t/p/w1280`,
    searchApi: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`,
};


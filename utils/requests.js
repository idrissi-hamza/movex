const API_KEY = process.env.API_KEY;
const BASE_URL='https://api.themoviedb.org/3'

// const API_KEY = process.env.NEXT_PUBLIC_API_KEY
// const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}

export default requests

// export default {
//   fetchTrending: {
//     title: "Trending",
//     url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   },
//   fetchTopRated: {
//     title: "Top Rated",
//     url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   },

//   fetchActionMovies: {
//     title: "Action",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   },

//   fetchComedyMovies: {
//     title: "Comedy",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   },

//   fetchHorrorMovies: {
//     title: "Horror",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   },
//   fetchRomanceMovies: {
//     title: "Romance",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   },
//   fetchMysteryMovies: {
//     title: "Mystery",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   },
//   fetchSciFiMovies: {
//     title: "Sci-Fi",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
//   },
//   fetchWesternMovies: {
//     title: "Western",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
//   },
//   fetchAnimationMovies: {
//     title: "Animation",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
//   },
//   fetchTV: {
//     title: "TV Movie",
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
//   },
// };
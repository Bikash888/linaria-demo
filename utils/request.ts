export const API_KEY = process.env.API_KEY;
export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovie: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchComedyMovie: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
  },
  fetchHorrorMovie: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
  },
  fetchRomanticMovie: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
  },
  fetchMysteryMovie: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
  },
  fetchTv: {
    title: "Tv Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
  },
  fetchThriller: {
    title: "Thriller",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=53`
  },
  fetchDrama: {
    title: "Drama",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`
  },
  fetchCrime: {
    title: "Crime",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=80`
  }
}
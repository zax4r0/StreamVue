const TMDB_API_KEY = process.env.TMDB_API_KEY
export default {
  Trending: {
    title: 'Trending',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878&include_adult=true`,
  },
  Toprated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&include_adult=true`,
  },
  Action: {
    title: 'Action',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28&include_adult=true`,
  },
  Comedy: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&include_adult=true`,
  },
  Horror: {
    title: 'Horror',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&include_adult=true`,
  },
  Romance: {
    title: 'Romance',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10770&include_adult=true`,
  },
  Mystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=9648&include_adult=true`,
  },
  SciFI: {
    title: 'Sci-FI',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878&include_adult=true`,
  },
  Western: {
    title: 'Western',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=37&include_adult=true`,
  },
  Animation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16&include_adult=true`,
  },
  Tv: {
    title: 'Tv Movie',
    url: `/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&include_adult=true`,
  },
}

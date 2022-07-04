const API_KEY = process.env.TMDB_API_KEY

const state = {
  movies: [],
  searchResults: [],
  similerMovies: [],
  movieDetail: {},
}

const getters = {
  getMovies(state) {
    return state.movies
  },

  getMovieDetail(state) {
    return state.movieDetail
  },

  getSearchResults(state) {
    return state.searchResults
  },

  getSimilerMovies(state) {
    return state.similerMovies
  },
}

const mutations = {
  setMovies(state, data) {
    state.movies = data
  },

  setMovieDetail(state, movie) {
    state.movieDetail = movie
  },

  setSearchResults(state, data) {
    state.searchResults = data
  },

  setSimilerMovies(state, data) {
    state.similerMovies = data
  },
}

const actions = {
  async fetchMovies(context, payload) {
    const listType = payload.listType.replace('-', '_')

    const res = await this.$axios.$get(`https://api.themoviedb.org/3${listType}&page=${payload.page}`)
    context.commit('setMovies', res)
  },

  async fetchMovieDetail(context, id) {
    await this.$axios.$get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then((res) => {
      context.commit('setMovieDetail', res)
    })
  },

  async fetchSearchMovies(context, payload) {
    await this.$axios
      .$get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${payload.keyword}&page=${payload.page}`)
      .then((res) => {
        context.commit('setSearchResults', res)
      })
  },

  async fetchSimilerMovies(context, id, page) {
    const res = await this.$axios.$get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=${(page = 1)}'`)
    context.commit('setSimilerMovies', res.results)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}

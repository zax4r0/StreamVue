<template>
  <div>
    <div class="container">
      <div v-for="movie in movies.results" :key="movie.id">
        <div class="i">
          <Poster :movie="movie" />
        </div>
      </div>
    </div>
    <Pagination
      :total-pages="20"
      :current-page="movies.page"
      :per-page="movies.length"
    />
    {{ movies.total_pages }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Pagination from '../components/Pagination/index.vue'
import Poster from '../components/Poster.vue'
import requests from '~/lib'

export default {
  name: 'IndexPage',
  components: { Pagination, Poster },

  async fetch({ store, query }) {
    await store.dispatch('fetchMoviesSlider')

    await store.dispatch('fetchMovies', {
      listType: requests[query?.genre]?.url || requests.Action.url,
      page: query.page !== undefined && query.page < 1 ? 1 : query.page,
    })
  },
  computed: {
    ...mapGetters({
      movies: 'getMovies',
      sliderMovies: 'getMovieSlider',
    }),
  },
  watchQuery: ['page', 'genre'],
}
</script>

<style lang="scss" scoped>
.container {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  transition-property: all;
  transition-duration: 300ms;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 640px) {
    display: grid;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
.i {
  overflow: hidden;

  :hover {
    z-index: 50;
    --transform-scale-x: 1.05;
    --transform-scale-y: 1.05;
    -webkit-transform: scale3d(1.2, 1.2, 1);
    transform: scale3d(1.2, 1.2, 1);
    transition-duration: 200ms;
    -webkit-transition: all 3.7s 0s ease-in;
    -moz-transition: all 3.7s 0s ease-in;
    -o-transition: all 3.7s 0s ease-in;
    transition: all 3.7s 0s ease-in;
  }
}
</style>

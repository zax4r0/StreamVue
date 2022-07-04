<template>
  <div>
    <Movie :movies="movies.results" />
    <Pagination
      :page="movies.page"
      :total-pages="movies.totalPages"
      :current-page="movies.page"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import requests from '~/lib'
import Movie from '~/components/Movie/index.vue'

export default {
  name: 'IndexPage',
  components: { Movie },

  async fetch({ store, query }) {
    await store.dispatch('fetchMovies', {
      listType: requests[query?.genre]?.url || requests.Action.url,
      page: query.page !== undefined && query.page < 1 ? 1 : query.page,
    })
  },

  computed: {
    ...mapGetters({
      movies: 'getMovies',
    }),
  },

  watchQuery: ['page', 'genre'],
}
</script>

<style lang="scss" scoped>
.movie_a {
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
    gap: 10px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 10px;
  }

  @media (min-width: 2560px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 10px;
  }
}
</style>

<template>
  <div class="movie_a">
    <div
      v-for="movie in movies"
      :key="movie.id"
      class="col-sm-6 col-md-4 col-lg-3"
    >
      <Poster :movie="movie" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviesResults',
  props: {
    /* eslint-disable-next-line vue/require-prop-types */
    movies: {
      default: [],
    },
  },
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

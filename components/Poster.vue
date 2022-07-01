<template>
  <div class="movie-item">
    <div class="movie-item__img">
      <nuxt-link
        :to="
          '/movie/' +
          movie.id +
          '-' +
          movie.original_title.replace(/\s+/g, '-').toLowerCase()
        "
      >
        <nuxt-img
          :src="`https://image.tmdb.org/t/p/w500/${
            movie.poster_path ||
            movie.backdrop_path ||
            movie.poster_path ||
            movie.poster_path
          }`"
          quality="100%"
          :alt="`${movie.original_title}`"
          :modifiers="{ roundCorner: '0:100' }"
          class="img-fluid"
        />
      </nuxt-link>
    </div>
    <div class="movie-item__content">
      <h4 class="movie-item__title">
        <nuxt-link :to="'/movie/' + movie.id">{{ movie.title }}</nuxt-link>
      </h4>
      <div class="movie-item__rate">
        <i class="fas fa-star"></i>
        <span>{{ movie.vote_average }}/<small>10</small></span>
      </div>
    </div>
    <!-- !!! -->
  </div>
</template>

<script>
export default {
  name: 'MoviePoster',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.movie-item {
  margin-bottom: 30px;
}

.movie-item__img {
  margin-bottom: 10px;
}

.movie-item__img img {
  width: 100%;
  border-radius: 4px;
}

.movie-item__img a {
  display: block;
  position: relative;
}

.movie-item__img a:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  -webkit-transition: ease-in-out 200ms;
  -moz-transition: ease-in-out 200ms;
  -ms-transition: ease-in-out 200ms;
  -o-transition: ease-in-out 200ms;
  transition: ease-in-out 200ms;
  background: rgba(2, 13, 24, 0.4);
}

.movie-item__img a:hover:before {
  opacity: 1;
}

.movie-item__title {
  font-size: 18px;
  margin-bottom: 5px;
}

.movie-item__title a {
  color: #fff;
  text-decoration: none;
}

.movie-item__rate .fas {
  color: #f5b50a;
  margin-right: 3px;
}

.movie-item__rate span {
  color: #abb7c4;
  font-size: 14px;
}
</style>

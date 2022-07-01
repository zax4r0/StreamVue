<template>
  <div class="iamge">
    <nuxt-link
      :to="
        'movie/' +
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
        width="400px"
        height="auto"
        :alt="`${movie.original_title}`"
        :modifiers="{ roundCorner: '0:100' }"
      />
    </nuxt-link>
    <h1 class="title">
      {{ movie.title || movie.original_title || movie.name }}
      {{ movie.media_type }}
    </h1>
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
.title {
  margin-top: 0.25rem;
  -webkit-transition: all 3.7s 0s ease-in;
  -moz-transition: all 3.7s 0s ease-in;
  -o-transition: all 3.7s 0s ease-in;
  transition: all 3.7s 0s ease-in;
  color: #98c379;
  font-size: 1.25rem;
  line-height: 1.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 28rem;
}

.iamge {
  padding: 0.75rem;
  margin-right: 0.5rem;
  overflow: hidden;
  object-fit: scale-down;
  cursor: pointer;
}
</style>

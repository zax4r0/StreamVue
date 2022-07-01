<template>
  <div>
    <div class="c">
      <div v-html="raw"></div>
    </div>
    <pre>
      {{ JSON.stringify(detail, null, 2) }}
    </pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SingleMovie',

  data() {
    return {
      raw: `
      <iframe
      width="1080"
      height="720"
      src="https://2embed.org/embed/movie?tmdb=${
        this.$route.params.id.split('-')[0]
      }"
      frameborder="0"
      allow="accelerometer;
      autoplay;
      encrypted-media;
      gyroscope;
      picture-in-picture"
      allowfullscreen>
      </iframe>`,
    }
  },

  async fetch({ store, params }) {
    await store.dispatch('fetchMovieDetail', params.id.split('-')[0])
  },
  /**
     *
     * `<iframe src=${
        `https://www.2embed.ru/embed/tmdb/movie?id=${params.id}` ||
        `https://www.2embed.ru/embed/imdb/movie?id=${this.detail.id}`
      }
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        ></iframe>`
     */

  head() {
    return {
      title: this.detail.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.detail?.overview.length >= 120
              ? this.detail?.overview.substring(0, 120) + '...'
              : this.detail?.overview,
        },
        { hid: 'og:type', content: 'article' },
        { hid: 'og:title', content: this.detail?.title },
        {
          property: 'og:description',
          content:
            this.detail.overview.length >= 120
              ? this.detail.overview.substring(0, 120) + '...'
              : this.detail.overview,
        },
        {
          property: 'og:image',
          content: 'https://image.tmdb.org/t/p/w500' + this.detail.poster_path,
        },
      ],
    }
  },

  computed: {
    ...mapGetters({
      detail: 'getMovieDetail',
    }),
  },
}
</script>
<style lang="scss" scoped>
.c {
  display: flex;
  overflow: hidden;
  position: relative;
  margin-bottom: 3rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

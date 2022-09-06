<template>
  <div>
    <div class="iframe-container">
      
        <iframe
          width="420"
          height="315"
          :src="`https://2embed.org/embed/movie?tmdb=${detail.id}`"
          frameborder="0"
          picture-in-picture
          accelerometer
          encrypted-media
          gyroscope
          allowfullscreen
        ></iframe>
      
    </div>

    <div id="fullpage">
      <div class="section one">
        <div class="movie-info">
          <h1>{{ detail.original_title }}</h1>
          <div>
            <span class="rating">{{ detail.adult === true ? '18+' : 'PG-13' }}</span>
            <a>
              {{ Math.floor(detail.runtime / 60) }}hr {{ '' }} {{ Math.floor(detail.runtime % 60) }}min
              <div v-for="g in detail.genres" :key="g.id">{{ g.name }}</div>
            </a>
          </div>
          <div class="stars">
            <i v-for="vote in new Array(detail.vote_count)" :key="vote" class="fa fa-star"></i>
          </div>
          <!--stars end-->
          <p>
            {{ detail.overview }}
          </p>
          <button id="play-btn"><i class="fa fa-play-circle"></i> WATCH NOW</button>
          <button id="add-btn">ADD TO QUEUE</button>
        </div>
        <!--movie-info end-->
      </div>
    </div>
    <div>
      <Movie :movies="similer" />
      <Pagination :page="similer.page" :total-pages="similer.totalPages" :current-page="similer.page" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Pagination from '~/components/Pagination/index.vue'

export default {
  name: 'SingleMovie',
  components: { Pagination },

  async fetch({ store, params, query }) {
    await store.dispatch('fetchMovieDetail', params.id.split('-')[0])
    await store.dispatch('fetchSimilerMovies', params.id.split('-')[0], query.page)
  },
  head() {
    return {
      title: this.detail.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.detail?.overview.length >= 120 ? this.detail?.overview.substring(0, 120) + '...' : this.detail?.overview,
        },
        { hid: 'og:type', content: 'article' },
        { hid: 'og:title', content: this.detail?.title },
        {
          property: 'og:description',
          content: this.detail.overview.length >= 120 ? this.detail.overview.substring(0, 120) + '...' : this.detail.overview,
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
      similer: 'getSimilerMovies',
    }),
  },
}
</script>
<style lang="scss" scoped>
.iframe-container {
  position: relative;
  margin-top: 2.5rem;
  margin-top: 2.5rem;
  display: inline-block;
  background: rgb(0, 0, 0);
  width: 100%;
  padding: 0 0 50%;

  & iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

//=======================
//    MOVIE INFO
//=======================

$white: white;
$black: rgb(0, 0, 0);
$lightgray: lightgray;
$skyblue: lightskyblue;

.movie-info {
  color: $white;
  text-shadow: 0 0 30px black;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  margin-left: 8em;
  padding-right: 10em;
  h1 {
    font-weight: 100;
    font-size: 2.5em;
    margin-bottom: 0.3em;
  }
  p {
    margin-bottom: 1.8em;
    letter-spacing: 1px;
    .rating {
      border: solid 2px $lightgray;
      color: $lightgray;
      padding: 0.15em 0.4em;
      font-size: 0.85em;
      margin-right: 0.45em;
    }
  }
  .stars {
    margin: 1em 0;
    i {
      color: $skyblue;
      margin: 0 0.1em;
    }
  }
  button {
    border: 2px solid $skyblue;
    background: none;
    color: $skyblue;
    font-size: 0.75em;
    padding: 0.7em 1.3em;
    margin-bottom: 0.85em;
  }
  #play-btn {
    margin-right: 0.4em;
    background: $skyblue;
    color: $white;
  }
  #add-btn {
    border-color: $white;
    color: $white;
    &:hover {
      background: $skyblue;
      color: $white;
      border-color: $skyblue;
    }
  }
}
//====================
//  SLIDE NAVIGATION
//===================
#fp-nav ul li a span,
.fp-slidesNav ul li a span {
  background: $skyblue;
}
//======================
//  MEDIA QUERIES
//======================
@media (max-width: 768px) {
  li:nth-of-type(2),
  li:nth-of-type(4),
  li:nth-of-type(8) {
    display: none;
  }
  .movie-info {
    margin-left: 5em;
    padding-right: 2em;
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 0.95em;
    }
  }
}
@media (max-width: 425px) {
  li:nth-of-type(7) {
    display: none;
  }
  .movie-info {
    margin-left: 3.5em;
    margin-top: 4em;
    padding-right: 0.5em;
    p:nth-of-type(1) {
      line-height: 1.6;
      margin-bottom: 0;
    }
    p:nth-of-type(2) {
      line-height: 1.2;
      letter-spacing: 0.15em;
    }
  }
}
</style>

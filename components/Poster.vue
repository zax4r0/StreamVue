<template>
  <div class="movie-item">
    <div class="movie-item__img">
      <nuxt-link :to="'/movie/' + movie.id + '-' + movie.original_title.replace(/\s+/g, '-').toLowerCase()">
        <div>
          <client-only>
            <!-- this component will only be rendered on client-side -->

            <div class="card">
              <nuxt-img
                :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.backdrop_path || movie.poster_path || movie.poster_path}`"
                quality="100%"
                :alt="`${movie.original_title}`"
                :modifiers="{ roundCorner: '0:100' }"
                class="img-fluid img"
              />

              <div class="content">
                <h1 class="movie-item__title">
                  {{ movie.title }}
                </h1>
                <div class="movie-item__rate">
                  <h2>{{ movie.vote_average }}/<small>10</small></h2>
                </div>
              </div>
            </div>

            <!-- skeliton placeholder -->
            <div slot="placeholder">
              <div class="card loading">
                <div class="image"></div>
                <div class="content">
                  <h1></h1>
                  <h2></h2>
                </div>
              </div>
            </div>
            <!-- skeliton placeholder -->
          </client-only>
        </div>
      </nuxt-link>
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

::placeholder {
  color: #fffafa4f;
  letter-spacing: 1px;
}

.card {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-flow: column;
  background: #ffffffa4;
  box-shadow: 0 8px 32px 0 #ffffff16;
  backdrop-filter: blur(8px);
  border-radius: 6px;
  padding: 0;
  margin: 16px;
  width: 240px;
  .image {
    height: 200px;
    img {
      display: block;
      width: 100%;
      height: inherit;
      object-fit: cover;
    }
  }
  .content {
    padding: 16px;
    h1 {
      margin-bottom: 8px;
      font-size: 1.4rem;
      letter-spacing: 1px;
    }
    h2 {
      font-size: 1rem;
      line-height: 1.4;
    }
  }
  &.loading {
    .image,
    .content * {
      background-color: #ffffffaf;
      background: linear-gradient(100deg, #ffffff00 40%, #ffffff12 50%, #ffffff00 60%) #ededed0f;
      background-size: 200% 100%;
      background-position-x: 180%;
      animation: 1.6s Shine ease-in-out infinite;
    }
    .content {
      h1 {
        min-height: 32px;
        border-radius: 4px;
        animation-delay: 0.05s;
      }
      h2 {
        min-height: 64px;
        border-radius: 4px;
        animation-delay: 0.07s;
      }
    }
  }
}

@keyframes Shine {
  to {
    background-position-x: -20%;
  }
}
</style>

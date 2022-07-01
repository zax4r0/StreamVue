<template>
  <nav class="nq">
    <div class="s">
      <div
        v-for="(value, key) in requests"
        :key="key"
        class="n"
        @click="
          $nuxt.$router
            .replace({
              path: '/',
              query: { genre: key },
            })
            .catch((error) => {
              if (
                error.name !== 'NavigationDuplicated' &&
                !error.message.includes(
                  'Avoided redundant navigation to current location'
                )
              ) {
                console.log(error)
              }
            })
        "
      >
        {{ key }}
      </div>
    </div>
    <div class="bg"></div>
  </nav>
</template>

<script>
import requests from '../lib'
export default {
  name: 'AppHeader',
  data() {
    return {
      requests,
    }
  },
}
</script>

<!-- <style>
.select-none {
  user-select: none;
}

.s {
  display: flex;
  overflow-x: scroll;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  margin-left: 2.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  white-space: nowrap;

  @media (min-width: 640px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

.n {
  transition-duration: 200ms;
  color: #ec4899;
  cursor: pointer;
  padding-right: 6rem;
}

.bg {
  position: absolute;
  top: 0;
  right: 0;
  background-color: linear-gradient(to left, var(--tw-gradient-stops));
}
</style> -->

<style>
.nq {
  position: relative;
  user-select: none;
}

.s {
  display: flex;
  overflow-x: scroll;
  font-size: 1.5rem;
  line-height: 2rem;
  white-space: nowrap;
}

.n {
  display: flex;
  transition-duration: 200ms;
  color: #48deec;
  cursor: pointer;
  padding-top: 1rem;
  padding-right: 7rem;
  padding-left: 7rem;
  justify-content: space-between;
}
</style>

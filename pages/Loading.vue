<template>
  <div class="container">
    <div>
      <h1>
        Hello from
        <span class="name">{{ name }}</span
        >.
        <br />
        <span v-if="finishedLoading" class="name">{{ message }}</span>
        <span v-else class="name">Loading...</span>
      </h1>
      <p>
        <nuxt-link to="/" class="button--grey">Back home</nuxt-link>
      </p>
      <long-loading-component />
    </div>
  </div>
</template>

<script>
import LongLoadingComponent from '~/components/LongLoadingComponent'
export default {
  name: 'ALaoding',
  asyncData() {
    return {
      name: process.server ? 'server' : 'client',
      finishedLoading: false,
    }
  },
  beforeMount() {
    //  eslint-disable no-new
    new Promise((resolve) => {
      setTimeout(() => {
        this.message = 'I am data that finished loading.'
        this.finishedLoading = true
        resolve()
      }, 1000)
    })
  },
  components: {
    LongLoadingComponent,
  },
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-weight: 400;
}

.name {
  color: #3b8070;
}

p {
  margin-top: 20px;
}
</style>

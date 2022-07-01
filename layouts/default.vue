<template>
  <div class="app">
    <Header />
    <AppHeader />
    <Nuxt keep-alive />
  </div>
</template>

<script>
import Header from '~/components/Header/index.vue'
export default {
  name: 'DefaultLayout',
  components: { Header },
}
</script>

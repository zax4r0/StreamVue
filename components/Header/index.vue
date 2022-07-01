<template>
  <!-- Todo use listing  -->
  <nav class="nav header">
    <div class="n2">
      <Nuxt-link class="g" to="/">
        <HomeIcon size="2.5x" class="h" />
        <div class="title">Home</div>
      </Nuxt-link>
      <Nuxt-link class="g" to="/">
        <LightningBoltIcon size="2.5x" class="h" />
        <div class="title">Trending</div>
      </Nuxt-link>
      <Nuxt-link class="g" to="/">
        <BadgeCheckIcon size="2.5x" class="h" />
        <div class="title">Varified</div>
      </Nuxt-link>
      <Nuxt-link class="g" to="/">
        <CollectionIcon size="2.5x" class="h" />
        <div class="title">Collections</div>
      </Nuxt-link>
      <Nuxt-link class="g" to="/">
        <SearchIcon size="2.5x" class="h" />
        <div class="title">hSearc</div>
      </Nuxt-link>
      <Nuxt-link class="g" to="/">
        <UserIcon size="2.5x" class="h" />
        <div class="title">DashBoard</div>
      </Nuxt-link>
      <!-- Login struff -->
    </div>
  </nav>
</template>

<script>
// Only import what you need!
import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from '@vue-hero-icons/outline'
export default {
  name: 'AppHeader',
  components: {
    HomeIcon,
    LightningBoltIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon,
  },
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 20px;
  .nav {
    display: flex;
    margin: 1.25rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 640px) {
      flex-direction: row;
    }
  }
  .n2 {
    display: flex;
    flex-grow: 1;
    margin-top: 20;
    justify-content: space-evenly;
    max-width: 42rem;
  }

  .g {
    display: flex;
    color: #ec4899;
    flex-direction: column;
    align-items: center;
    width: 5rem;
    cursor: pointer;

    &:hover {
      color: #fbbf24;
    }
    cursor: pointer;
  }

  .h {
    margin-bottom: 0.25rem;
    color: #48eca5;
    height: 1.25rem;
  }
  .title {
    letter-spacing: 0.1em;
    opacity: 0;
  }
  :hover {
    color: #24d0fb;
  }
}
</style>

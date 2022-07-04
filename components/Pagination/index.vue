<template>
  <div>
    <!-- TODO Avoid repeting code -->
    <!-- TODO Extact pagination Logic In saparate Component -->
    <!-- ! dont touch anything lol 🙃 -->

    <div class="pagination">
      <button
        v-if="currentPage !== 1"
        class="btn"
        @click="
          $nuxt.$router.push({
            query: {
              ...$route.query,
              page: $route.query.page ? parseInt($route.query.page, 10) - 1 : currentPage,
            },
          }),
            btnPrev()
        "
      >
        {{ '' }}
        <svg xmlns="http://www.w3.org/2000/svg" class="btn--icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <a class="page">{{ currentPage }}/{{ totalPages }}</a>
      <button
        class="btn"
        @click="
          $nuxt.$router.push({
            query: {
              ...$route.query,
              page: $route.query.page === 1 ? parseInt($route.query.page, 10) + 1 : currentPage + 1,
            },
          }),
            btnNext()
        "
      >
        {{ '>' }}
        <svg xmlns="http://www.w3.org/2000/svg" class="btn--icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationWithRoute',
  props: {
    totalPages: {
      type: Number,
      required: false,
      default: 10,
    },
    currentPage: {
      type: Number,
      required: false,
      default: 2,
    },
    perPage: {
      type: Number,
      required: false,
      default: 20,
    },
    pageRange: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      selected: this.$route.query.page || 1,
      disableNext: '',
      disablePrev: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: inline-block;
}

.pagination p {
  color: skyblue;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 200px;
}
.pages {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.page {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.page:hover {
  background-color: #08697f;
  color: #fff;
}

.active {
  background-color: #087f5b;
  color: #fff;
}

.btn {
  background-color: #fff;
  border: 1px solid #087f5b;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
}
.btn:hover {
  background-color: #087f5b;
}
.btn--icon {
  height: 24px;
  width: 24px;
  stroke: #087f5b;
}
.btn--icon:hover {
  stroke: #fff;
}
</style>

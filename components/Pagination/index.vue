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
              page: $route.query.page
                ? parseInt($route.query.page, 10) - 1
                : currentPage,
            },
          }),
            btnPrev()
        "
      >
        {{ '' }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="btn--icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <!-- <div
        class="pages"
        v-for="(item, index) in new Array(perPage)"
        :key="index"
      >
        <a
          :class="{ active: parseInt($route.query.page) === index + 1 }"
          class="page"
          @click="
            $nuxt.$router.push({
              query: {
                ...$route.query,
                page: index + 1,
              },
            })
          "
          >{{ index + 1 }}</a
        >
      </div> -->
      <div
        v-for="n in pages"
        :key="n"
        :class="n.content == selected ? 'active ' : '' + n.disable"
        class="pages"
      >
        <div v-if="n.show">
          <p
            v-if="n.disable != 'disabled'"
            class="page"
            @click="
              $nuxt.$router.push({
                query: {
                  ...$route.query,
                  page: n.content,
                },
              })
              emitBtnClick(n.content)
            "
          >
            {{ n.content }}
          </p>
          <p v-else>{{ n.content }}</p>
        </div>
      </div>

      <!-- <a class="page">{{ totalPages }}</a> -->
      <button
        class="btn"
        @click="
          $nuxt.$router.push({
            query: {
              ...$route.query,
              page: $route.query.page
                ? parseInt($route.query.page, 10) + 1
                : currentPage,
            },
          }),
            btnNext()
        "
      >
        {{ '>' }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="btn--icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VP',
  props: {
    totalPages: {
      type: Number,
      required: false,
      default: 10,
    },
    currentPage: {
      type: Number,
      required: false,
      default: 1,
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
  computed: {
    /* eslint-disable */
    pages: function () {
      const items = []
      for (let i = 0; i < this.totalPages; i++) {
        const page = {
          content: i + 1,
          disable: '',
          show: false,
        }
        items[i] = page
      }
      const page1 = {
        content: '...',
        disable: 'disabled',
        show: false,
      }
      const page2 = {
        content: '...',
        disable: 'disabled',
        show: false,
      }
      items.splice(1, 0, page1)
      items.splice(items.length - 1, 0, page2)
      for (let i = 0; i < items.length; i++) {
        if (i === 0 || i === items.length - 1) items[i].show = true
        if (this.selected <= this.pageRange) {
          if (this.selected === this.pageRange) {
            if (i >= 2 && i <= this.pageRange + 1) items[i].show = true
          } else {
            if (i >= 2 && i <= this.pageRange) items[i].show = true
          }
          items[items.length - 2].show = true
        } else if (this.selected > this.pageRange) {
          if (
            i >= this.selected - 1 &&
            this.selected + 2 < items.length - 2 &&
            i <= this.selected + 1
          ) {
            items[1].show = true
            items[items.length - 2].show = true
            items[i].show = true
          } else if (
            i >= items.length - 2 - this.pageRange &&
            this.selected + 2 >= items.length - 2
          ) {
            items[1].show = true
            items[items.length - 2].show = false
            items[i].show = true
          }
        }
      }
      return items
    },
  },
  methods: {
    emitBtnClick: function (n) {
      this.selected = n
      this.$emit('btnClick', n, this.myData)
      this.disablePrevNext()
    },
    btnNext: function () {
      this.selected++
      this.$emit('btnClick', this.selected, this.myData)
      this.disablePrevNext()
    },
    btnPrev: function () {
      this.selected--
      this.$emit('btnClick', this.selected, this.myData)
      this.disablePrevNext()
    },
    disablePrevNext: function () {
      this.disablePrev = this.selected == 1 ? 'disabled' : ''
      this.disableNext = this.selected == this.totalPage ? 'disabled' : ''
    },
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

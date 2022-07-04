<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Loading...',
    }
  },
  beforeMount() {
    new Promise((resolve) => {
      setTimeout(() => {
        this.message =
          'I am data within child component that finished loading...'
        resolve()
      }, 2000)
    })
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

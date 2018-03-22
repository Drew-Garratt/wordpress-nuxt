<template>
  <div class="app">
    <the-header/>
    <nuxt/>
  </div>
</template>

<style lang="scss">
.button {
  font-size: em(12px);
}
</style>

<script>
export default {
  components: {
    TheHeader: () => import('../components/TheHeader')
  }
}
</script>

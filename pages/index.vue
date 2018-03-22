<template>
  <section div class="page page--home">
    <div class="hero">
      <div class="wrap">
        <h1>Title goes here</h1>
      </div>
    </div>
    <div class="projects">
      <div class="wrap flex">
        <img class="col" src="http://via.placeholder.com/350x150">
        <img class="col" src="http://via.placeholder.com/350x150">
        <img class="col" src="http://via.placeholder.com/350x150">
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;

  &--hero {
    height: 100vh;
  }
}

.col {
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
}
</style>

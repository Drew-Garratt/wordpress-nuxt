<template>
  <header>
    <div v-if="meta">
      <nuxt-link to="/" class="logo" exact>
        <h1 v-html="meta.name"/>
      </nuxt-link>
      <nav>
        <nuxt-link to="/" exact>Home</nuxt-link>
        <nuxt-link to="/">Nav 1</nuxt-link>
        <nuxt-link to="/">Nav 2</nuxt-link>
        <nuxt-link to="/">Nav 3</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    meta() {
      return this.$store.state.meta
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

.logo {
  position: absolute;
  top: rem(10px);
  left: rem(30px);
}

nav {
  position: absolute;
  top: rem(10px);
  right: rem(30px);
  display: flex;
}
</style>

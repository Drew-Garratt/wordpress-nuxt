<template>
  <header v-if="meta">
    <nuxt-link to="/" class="logo" exact>
      <h1 class="fs-medium" v-html="meta.name"/>
    </nuxt-link>
    <nav>
      <nuxt-link to="/" exact>Home</nuxt-link>
      <nuxt-link to="/sample-page">Sample Page</nuxt-link>
      <nuxt-link to="/sample-page/sample-child-page">Sample Child Page</nuxt-link>
      <nuxt-link to="/news">News</nuxt-link>
      <button class="menu-toggle">
        <svg width="30" height="25" viewBox="0 0 30 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Canvas" transform="translate(570 311)">
            <g id="Component">
              <g id="Rectangle">
                <use xlink:href="#path0_fill" transform="matrix(1 0 0 -1 -570 -286)"/>
              </g>
              <g id="Rectangle">
                <use xlink:href="#path0_fill" transform="matrix(1 0 0 -1 -570 -296)"/>
              </g>
              <g id="Rectangle">
                <use xlink:href="#path0_fill" transform="matrix(1 0 0 -1 -570 -306)"/>
              </g>
            </g>
          </g>
          <defs>
            <path id="path0_fill" d="M 0 1C 0 0.447715 0.447715 0 1 0L 29 0C 29.5523 0 30 0.447715 30 1L 30 4C 30 4.55228 29.5523 5 29 5L 1 5C 0.447716 5 0 4.55228 0 4L 0 1Z"/>
          </defs>
        </svg>
      </button>
    </nav>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  padding: rem(25px) rem(30px) 0;
}

nav {
  padding: rem(25px) rem(30px) 0;
  align-items: center;
  display: flex;

  a {
    margin: 0 em(10px);
  }
}

.menu-toggle {
  margin-left: 20px;
  padding: 0;
  -webkit-appearance: none;
  background: none;
  border: none;
}
</style>

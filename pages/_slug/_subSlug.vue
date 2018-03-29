<template>
  <section div class="page page--home">
    <div class="container container--fluid">
      <div class="hero flex">
        <h1>{{ page.title }}</h1>
      </div>
    </div>
    <div class="projects container container--fluid">
      <div class="projects__flex flex">
        <img class="col" src="http://via.placeholder.com/350x150">
        <img class="col" src="http://via.placeholder.com/350x150">
        <img class="col" src="http://via.placeholder.com/350x150">
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData({ app, store, params, error }) {
    const res = await app.$axios.get(
      `${store.state.wordpressAPI}/wp/v2/pages?slug=${
        params.subSlug
      }&status=publish&_embed`
    )
    if (res.data.length > 0) {
      if (res.data[0].parent !== 0) {
        const parentRes = await app.$axios.get(
          `${store.state.wordpressAPI}/wp/v2/pages?id=${
            res.data.parent
          }&status=publish&_embed`
        )
        if (parentRes.data.length > 0) {
          store.commit('setCurrentPage', res.data)
        } else {
          error({ statusCode: 404, message: 'Page not found' })
        }
      } else {
        error({ statusCode: 404, message: 'Page not found' })
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  transition(to, from) {
    console.log(to, from)
    return 'fade'
  },

  head() {
    return {
      title: `${this.page.title} | ${this.$store.state.meta.name}`,
      meta: [{ description: this.page.excerpt }]
    }
  },

  computed: {
    ...mapState({
      page: state => state.currentPage
    })
  }
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 80vh;
  min-height: em(400px);
  align-items: center;

  h1 {
    margin: auto;
  }
}

.projects {
  &__flex {
    flex-wrap: wrap;
  }

  .col {
    width: 33.33%;
  }
}
</style>

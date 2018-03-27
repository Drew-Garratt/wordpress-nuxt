<template>
  <section div class="page page--home">
    <div class="container">
      <div class="hero flex">
        <h1>News</h1>
      </div>
    </div>
    <div class="news container">
      <div class="news__flex flex">
        <ul>
          <li v-for="(article, index) in articles" :key="index">
            <nuxt-link :to="'/news/' + article.slug">{{ article.title.rendered }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData({ app, store, error }) {
    const res = await app.$axios.get(
      `${
        store.state.wordpressAPI
      }/wp/v2/posts?orderby=date&per_page=10&status=publish&_embed`
    )
    if (res.data.length > 0) {
      store.commit('setArticles', res.data)
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  head() {
    return {
      title: `News | ${this.$store.state.meta.name}`,
      meta: `News page`
    }
  },

  computed: {
    ...mapState({
      articles: state => state.articles
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

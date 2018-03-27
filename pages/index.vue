<template>
  <section div class="page page--home">
    <div class="container">
      <div class="hero flex">
        <h1>{{ page.title }}</h1>
      </div>
      <div class="intro flex">
        <h2>{{ acf.intro[0].title }}</h2>
        <div class="message" v-html="acf.intro[0].message"/>
      </div>
    </div>
    <div class="container">
      3
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import AppLogo from '~/components/AppLogo.vue'

export default {
  async asyncData({ app, store }) {
    const frontPage = await app.$axios.get(
      `${
        store.state.wordpressAPI
      }/wp/v2/pages?slug=front-page&status=publish&_embed`
    )
    store.commit('setFrontpage', frontPage.data)
  },
  components: {
    AppLogo
  },
  computed: {
    ...mapState({
      page: state => state.frontpage,
      acf: state => state.frontpage.acf,
      title: state => state.frontpage.acf.title
    })
  },
  head() {
    return {
      title: `${this.page.title} | ${this.$store.state.meta.name}`,
      meta: [{ description: this.page.excerpt }]
    }
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

.intro {
  h2 {
    width: 40%;
  }

  .message {
    width: 60%;
  }
}
</style>

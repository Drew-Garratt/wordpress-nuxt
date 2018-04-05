<template>
  <section div class="page page--home">
    <div class="hero">
      <no-ssr>
        <vue-particles
          class="particles absolute-cover"
          color="#dedede"
        />
      </no-ssr>
      <div class="container container--fluid">
        <div class="hero__content absolute-cover flex">
          <h1>{{ page.title }}</h1>
        </div>
      </div>
    </div>
    <div class="container container--small">
      <div class="intro columns">
        <h2 class="column">{{ acf.intro[0].title }}</h2>
        <div class="column message" v-html="acf.intro[0].message"/>
      </div>
    </div>
    <home-features/>
    <home-projects/>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import HomeFeatures from '~/components/HomeFeatures.vue'
import HomeProjects from '~/components/HomeProjects.vue'

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
    HomeFeatures,
    HomeProjects
  },

  computed: {
    ...mapState({
      page: state => state.frontpage,
      acf: state => state.frontpage.acf,
      title: state => state.frontpage.acf.title
    })
  },

  transition() {
    return 'fade'
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
  position: relative;
  margin-bottom: 3rem;

  &__content {
    align-items: center;
  }

  h1 {
    margin: auto;
  }
}

.intro {
  margin-bottom: 6rem;

  h2 {
    margin-bottom: 1rem;

    @media screen and (min-width: em(600px,16px)) {
      width: 40%;
    }
  }

  .message {
    @media screen and (min-width: em(600px,16px)) {
      width: 60%;
    }
  }
}
</style>

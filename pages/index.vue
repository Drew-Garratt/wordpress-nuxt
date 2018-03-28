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
    <div class="features container">
      <div class="flex">
        <div class="col">
          <h3>John Quincy Adding Machine.</h3>
          <p>Well, let's just dump it in the sewer and say we delivered it. And why did 'I' have to take a cab? And why did 'I' have to take a cab?</p>
        </div>
        <div class="col middle">
          <h3>Anyone who laughs is a communist!</h3>
          <p>You know the worst thing about being a slave? They make you work, but they don't pay you or let you go.</p>
        </div>
        <div class="col">
          <h3>Your lyrics lack subtlety.</h3>
          <p>When the lights go out, it's nobody's business what goes on between two consenting adults.</p>
        </div>
      </div>
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
    width: 40%;
  }

  .message {
    width: 60%;
  }
}

.features {
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margin-bottom: 3rem;

  .col {
    width: 33.33%;
    padding: 3rem 1.5rem;
    height: 33vw;

    &.middle {
      border-right: 1px solid grey;
      border-left: 1px solid grey;
    }
  }

  h3 {
    min-height: 5em;

    &:before {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      margin-bottom: 20px;
      background: #000;
    }
  }
}
</style>

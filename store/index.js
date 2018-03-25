export const state = () => ({
  wordpressAPI: process.env.WP_API + '/wp-json',
  meta: {
    description: '',
    name: ''
  },
  frontpage: null,
  currentPage: null,
  parentPage: null,
  pages: [],
  article: null,
  articles: [],
  authorArticles: []
})

export const actions = {
  async nuxtServerInit({ commit, state }) {
    const meta = await this.$axios.get(state.wordpressAPI)
    commit('setMeta', meta.data)

    const frontPage = await this.$axios.get(
      `${state.wordpressAPI}/wp/v2/pages?slug=front-page&status=publish&_embed`
    )
    commit('setFrontpage', frontPage.data)
  }
}

export const mutations = {
  setMeta(state, data) {
    state.meta = data
  },
  setFrontpage(state, data) {
    state.frontpage = filterPostData(data)
  },
  setCurrentPage(state, data) {
    state.page = filterPostData(data)
  }
}

// Save only relavent portions of the response
function filterPostData(data) {
  let postSave = {}
  let post = data[0]
  if (post.hasOwnProperty('id')) {
    postSave.id = post.id
    postSave.parent = post.parent
    postSave.menu_order = post.menu_order
    postSave.dateid = post.date
    postSave.modified = post.modified
    postSave.slug = post.slug
    postSave.title = post.title.rendered
    postSave.excerpt = post.excerpt.rendered
    postSave.content = post.content.rendered
  }
  if (post.hasOwnProperty('acf')) {
    postSave.acf = post.acf
  }
  return postSave
}

export const state = () => ({
  wordpressAPI: process.env.WP_API + '/wp-json',
  meta: {
    description: '',
    name: ''
  },
  frontpage: null,
  page: null,
  pages: [],
  article: null,
  articles: [],
  authorArticles: []
})

export const actions = {
  async nuxtServerInit({ commit, state }) {
    let meta = await this.$axios.get(state.wordpressAPI)
    commit('setMeta', meta.data)
  }
}

export const mutations = {
  setMeta(state, data) {
    state.meta = data
  },
  setFrontpage(state, data) {
    state.frontpage = filterPostData(data)
  },
  setPage(state, data) {
    state.page = filterPostData(data)
  }
}

// Save only relavent portions of the response
function filterPostData(data) {
  let postSave = {}
  let post = data[0]
  if (post.hasOwnProperty('id')) {
    postSave.id = post.id
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

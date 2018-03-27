export const state = () => ({
  wordpressAPI: process.env.WP_API + '/wp-json',
  meta: {
    description: '',
    name: ''
  },
  frontpage: new newPost(),
  currentPage: new newPost(),
  parentPage: new newPost(),
  pages: [],
  articles: [],
  authorArticles: [],
  wpnonce: ''
})

export const actions = {
  async nuxtServerInit({ commit, state }) {
    const meta = await this.$axios.get(state.wordpressAPI)
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
  setCurrentPage(state, data) {
    state.currentPage = filterPostData(data)
  },
  setArticles(state, data) {
    state.articles = data
  },
  setPreviewPage(state) {
    let previewPage = new newPost()
    previewPage.title = 'Preview'
    previewPage.preview = true
    state.currentPage = previewPage
  },
  setWpnonce(state, data) {
    state.wpnonce = data
  }
}

// Save only relavent portions of the response
class newPost {
  constructor(
    id = '',
    parent = '',
    menu_order = '',
    dateid = '',
    modified = '',
    slug = '',
    title = '',
    excerpt = '',
    content = '',
    preview = false
  ) {
    this.id = id
    this.parent = parent
    this.menu_order = menu_order
    this.dateid = dateid
    this.modified = modified
    this.slug = slug
    this.title = title
    this.excerpt = excerpt
    this.content = content
    this.preview = preview
  }
}

// Save only relavent portions of the response
const filterPostData = function(data) {
  let postSave = new newPost()
  let post = {}
  if (Array.isArray(data)) {
    post = data[0]
  } else {
    post = data
  }
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

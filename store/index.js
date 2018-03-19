export const state = () => ({
  wordpressAPI: process.env.WP_API,
  meta: {
    description: '',
    name: ''
  }
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
  }
}

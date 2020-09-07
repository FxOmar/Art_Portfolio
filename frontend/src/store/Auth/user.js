export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER (state, data) {
    state.user = data
  }
}

export const actions = {
  async getUser ({ commit }) {
    if (this.$cookies.isKey('access_token')) {
      let { user } = await this.axios.get('http://localhost:3013/api/v1/auth/user')
      commit('SET_USER', user)
    }
  }
}

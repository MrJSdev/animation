import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enablePhoto: false,
    users: [
      {
        image: require('./assets/avatar.png'),
        name: 'Salim Ansari'
      },
      {
        image: require('./assets/avatar2.png'),
        name: 'Shahnawaz Khan'
      }
    ]
  },
  getters: {
    getUsers (state) {
      return state.users
    }
  },
  mutations: {

  },
  actions: {
  }
})

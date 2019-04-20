import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enablePhoto: false,
    selectedUser: {},
    selectedPosition: {},
    users: [
      {
        id: 0,
        image: require('./assets/avatar7.png'),
        name: 'Salim Ansari'
      },
      {
        id: 1,
        image: require('./assets/avatar8.png'),
        name: 'Shahnawaz Khan'
      },
      {
        id: 2,
        image: require('./assets/avatar3.png'),
        name: 'Aamir Khan'
      },
      {
        id: 3,
        image: require('./assets/avatar4.png'),
        name: 'Sharukh Khan'
      },
      {
        id: 4,
        image: require('./assets/avatar5.png'),
        name: 'Suraj Vishwakarma'
      },
      {
        id: 5,
        image: require('./assets/avatar6.png'),
        name: 'Vishal Gupta'
      }
    ]
  },
  getters: {
    getUsers (state) {
      return state.users
    },
    getSelectedUser (state) {
      return state.selectedUser
    },
    getSelectedPosition (state) {
      return state.selectedPosition
    }
  },
  mutations: {
    onSelectedUser (state, payload) {
      console.log(payload, 'payload')
      state.selectedUser = payload.user
      state.selectedPosition = { x: payload.x, y: payload.y }
    },
    goBackToSelectedUser (state, payload) {
      state.selectedUser = payload.user
      state.selectedPosition = { x: payload.x, y: payload.y }
    }
  },
  actions: {
    selectedUser ({ commit }, payload) {
      commit('onSelectedUser', payload)
    },
    backSelectedUser ({ commit }, payload) {
      commit('goBackToSelectedUser', payload)
    }
  }
})

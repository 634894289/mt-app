import Vue from 'vue'
import Vuex from 'vuex'
import createVuexAlong from 'vuex-along'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: '广州'
  },
  mutations: {
    setPosition(state, val) {
      state.position = val;
    }
  },
  actions: {
    setPosition(ctx, val) {
      ctx.commit('setPosition', val);
    }
  },
  modules: {

  },

  plugins: [
    createVuexAlong({
      name: 'mt-app'
    })
  ]
})

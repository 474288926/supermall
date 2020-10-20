import { createStore } from 'vuex'

export default createStore({
  state: {
  	count: 1000
  },
  mutations: {
  	increment (state) {
	      state.count++
	    }
  },
  actions: {
  },
  modules: {
  }
})

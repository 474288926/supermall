import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from "./getters"

const state = {
  count: 1000,
  cartList: []
}

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})

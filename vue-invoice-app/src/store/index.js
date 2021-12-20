import { createStore } from 'vuex'

import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import modules from './modules.js'


export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: modules
})

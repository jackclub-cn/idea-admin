import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)//如果使用全局的 script 标签，则无须如此（手动安装）。

const state = {
  keepAlive: [],

}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store

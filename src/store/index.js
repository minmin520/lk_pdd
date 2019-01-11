import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './action'

// 使用vuex
Vue.use(Vuex);

// 2、对外输出vue的store对象
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
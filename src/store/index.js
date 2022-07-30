import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {// 声明一个状态
    // 第一步，定义一个user对象
    user: null
  },
  // 第三步，获取state数据
  getters: {  // 用于将state中的数据进行加工
    getStoreUser(state){
      return state.user
    }
  },
  // 第二步，更新state数据
  mutations: {  // 用于操作数据（state)
    storeUser(state,user){
      state.user = user
    }
  },
  // 用于响应组件中的动作 给actions注册一个事件处理函数，当这个函数触发时，将状态提交到mutations中处理
  actions: {
  },
  modules: {
  }
})

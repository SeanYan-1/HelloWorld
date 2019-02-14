import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // state对组件的状态做集中的管理
  state: {
    num: 0,
  },
  // mutations是改变vuex状态的方法集
  mutations: {
    increase() {
      this.state.num = this.state.num + 1;
      alert(this.state.num);
    },
  },
  actions: {},
});

import Vue from 'vue'
import Vuex from 'vuex'
import usersStore from './users-store';
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    usersStore
  }

});
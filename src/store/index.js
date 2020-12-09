import Vue from 'vue'
import Vuex from 'vuex'
import usersStore from './users-store';
import productsStore from './products-store';
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    usersStore,
    productsStore
  }

});
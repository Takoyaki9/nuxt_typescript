import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import user from '~/store/user'
import RootState from '~/types/RootState'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    user,
  },
  state: {
    version: '1.0.0', // a simple property
  },
}

const createStore = () => {
  return new Vuex.Store<RootState>(store)
}

export default createStore

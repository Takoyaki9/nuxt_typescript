import { AxiosResponse } from 'axios'
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import RootState from '~/types/RootState'
import user from '~/types/user'

// 最終的にここの値がgetterで取られるし、mutationがcommitしてここの値が変わる
// user型なので、types/users.tsで定義したインターフェースに沿った構成じゃないとだめ
const state: user = {
  name: 'seigo2',
  email: 'seigo2@gmail.com',
}

const namespaced: boolean = true

// Gettersジェネリクスで型引数もらってる
const getters: GetterTree<user, RootState> = {
  // コンポーネントから@Getter('getUser', { namespace: 'user' })で呼ばれる
  // private user: userの形式でコンポーネントに存在する
  // user型のstateをもらって、user型で返す。もらってるのは上のstate
  getUser(state: user): user {
    // 上で定義してるstateを入れる
    const rtn_user = state
    console.log('getters')
    return rtn_user
  },
}

// const actions: ActionTree<user, RootState> = {
//   fetchThreads({ commit }): void {
//     const payload = {
//       name: 'fetch_name',
//       email: 'getch_mail',
//     }
//
//     commit('setThreads', payload)
//   },
// }

// const mutations: MutationTree<user> = {
//   setThreads(state: user) {
//     state.name = 'mutation_name'
//   },
// }

const threads: Module<user, RootState> = {
  //actions,
  getters,
  //mutations,
  namespaced,
  state,
}

export default threads

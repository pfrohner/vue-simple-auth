import * as types from './mutation-types'

export default {
  setToken ({ commit }, token) {
    commit(types.SET_TOKEN, token)
  }
}

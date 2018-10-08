import mutations from './mutations'
import * as types from './mutation-types'

describe('Mutations change state', () => {
  it('Sets token', () => {
    const state = {
      token: ''
    }

    mutations[types.SET_TOKEN](state, 'token-test')

    expect(state.token).toBe('token-test')
  })
})

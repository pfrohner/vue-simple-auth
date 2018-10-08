import actions from './actions'
import * as types from './mutation-types'

// helper for testing action with expected mutations
// https://vuex.vuejs.org/en/testing.html
function testAction (action, payload, state, expectedMutations, done) {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(type).toBe(mutation.type)
      if (payload) {
        expect(payload).toEqual(mutation.payload)
      }
    } catch (error) {
      done(error)
    }

    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({ commit, state }, payload)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).toBe(0)
    done()
  }
}

describe('Actions call mutations with the correct payload', () => {
  it('Calls SET_TOKEN', function(done) {
    const token = 'token-test'

    testAction(actions.setToken, token, {}, [
      { type: types.SET_TOKEN, payload: token }
    ], () => {
      done()
    })
  })
})

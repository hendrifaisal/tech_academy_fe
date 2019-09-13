import * as types from './slotTypes'
export default {
  [types.FETCH_SLOTS] (state, { id }) {
    state.id = id
    state.status = 'fetching'
    state.message = null
  },
  [types.FETCH_SLOTS_SUCCESS] (state, { data, id }) {
    state.id = id
    state.status = 'fetched'
    state.message = 'successfully'
    state.slots = {
      data
    }
    event('storeX', types.FETCH_SLOTS_SUCCESS, types.FETCH_SLOTS)
  },

  [types.FETCH_SLOTS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message

    event('storeX', types.FETCH_SLOTS_ERROR, types.FETCH_SLOTS)
  }
}

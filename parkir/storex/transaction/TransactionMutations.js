import * as types from './transactionTypes'
export default {
  [types.FETCH_TRANSACTIONS] (state) {
    state.status = 'fetching'
    state.message = null
  },

  [types.FETCH_TRANSACTIONS_SUCCESS] (state, data) {
    state.status = 'fetched'
    state.message = 'successfully'
    state.transactions = {
      data
    }
  },

  [types.FETCH_TRANSACTIONS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message
  }
}

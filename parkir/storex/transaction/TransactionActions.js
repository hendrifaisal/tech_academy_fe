import * as types from './transactionTypes'

export default {
  async [types.FETCH_TRANSACTIONS] ({ commit }, query = {}) {
    commit(types.FETCH_TRANSACTIONS)

    await this.$axios.get('/api/v1/transactions/').then((response) => {
      if (response.status === 200) {
        commit(types.FETCH_TRANSACTIONS_SUCCESS, response.data)
      } else {
        commit(types.FETCH_TRANSACTIONS_ERROR, response.status)
      }
    })
  }
}

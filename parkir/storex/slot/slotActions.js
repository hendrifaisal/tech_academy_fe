import * as types from './slotTypes'

export default {
  async [types.FETCH_SLOTS] ({ commit }, query = {}) {
    commit(types.FETCH_SLOTS)

    await this.$axios.get(`/api/v1/buildings/${query.id}/slots`).then((response) => {
      if (response.status === 200) {
        commit(types.FETCH_SLOTS_SUCCESS, response.data)
      } else {
        commit(types.FETCH_SLOTS_ERROR, response.status)
      }
    })
  }
}

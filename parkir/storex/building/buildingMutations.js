import * as types from './buildingTypes'
export default {
  [types.FETCH_BUILDINGS] (state) {
    state.status = 'fetching'
    state.message = null
  },

  [types.FETCH_BUILDINGS_SUCCESS] (state, { data, total }) {
    state.status = 'fetched'
    state.message = 'successfully'
    state.buildings = {
      data,
      total
    }
  },

  [types.FETCH_BUILDINGS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message
  },

  [types.ADD_BUILDINGS] (state) {
    state.status = 'adding'
    state.message = null
  },

  [types.ADD_BUILDINGS_SUCCESS] (state, data) {
    state.status = 'added'
    state.message = 'successfully added'
    state.building = data
  },

  [types.ADD_BUILDINGS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message
  },

  [types.DETAIL_BUILDINGS] (state) {
    state.status = 'get detail'
    state.message = null
  },

  [types.DETAIL_BUILDINGS_SUCCESS] (state, data) {
    state.status = 'detail'
    state.message = 'successfully added'
    state.building = data
  },

  [types.DETAIL_BUILDINGS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message
  },

  [types.UPDATE_BUILDINGS] (state) {
    state.status = 'updating'
    state.message = null
  },

  [types.UPDATE_BUILDINGS_SUCCESS] (state, data) {
    state.status = 'updated'
    state.message = 'successfully updated'
    state.building = data
  },

  [types.UPDATE_BUILDINGS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message
  },

  [types.DELETE_BUILDINGS] (state) {
    state.status = 'deleting'
    state.message = null
  },

  [types.DELETE_BUILDINGS_SUCCESS] (state) {
    state.status = 'deleted'
    state.message = 'successfully deleted'
  },

  [types.DELETE_BUILDINGS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message
  },

  [types.FETCH_SLOTS_BUILDINGS] (state) {
    state.status = 'fetching'
    state.message = null
  },

  [types.FETCH_SLOTS_BUILDINGS_SUCCESS] (state, { data, total }) {
    state.status = 'fetched'
    state.message = 'successfully'
    state.slots = {
      data,
      total
    }
  },

  [types.FETCH_SLOTS_BUILDINGS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message
  },

  [types.ADD_SLOT_BUILDINGS] (state) {
    state.status = 'adding'
    state.message = null
  },

  [types.ADD_SLOT_BUILDINGS_SUCCESS] (state, data) {
    state.status = 'added'
    state.message = 'successfully added'
    state.building = data
  },

  [types.ADD_SLOT_BUILDINGS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message
  },

  [types.DETAIL_SLOT_BUILDINGS] (state) {
    state.status = 'fetching'
    state.message = null
  },

  [types.DETAIL_SLOT_BUILDINGS_SUCCESS] (state, data) {
    state.status = 'fetched'
    state.message = 'successfully added'
    state.building = data
  },

  [types.DETAIL_SLOT_BUILDINGS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message
  },
  [types.UPDATE_SLOT_BUILDINGS] (state) {
    state.status = 'updating'
    state.message = null
  },

  [types.UPDATE_SLOT_BUILDINGS_SUCCESS] (state, data) {
    state.status = 'updated'
    state.message = 'successfully added'
    state.building = data
  },

  [types.UPDATE_SLOT_BUILDINGS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message
  },
  [types.DELETE_SLOT_BUILDINGS] (state) {
    state.status = 'deleting'
    state.message = null
  },

  [types.DELETE_SLOT_BUILDINGS_SUCCESS] (state) {
    state.status = 'deleted'
    state.message = 'successfully deleted'
  },

  [types.DELETE_SLOT_BUILDINGS_ERROR] (state, message) {
    state.status = 'error'
    state.message = message
  }

}

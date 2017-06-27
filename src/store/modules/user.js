import {
  SET_USERINFO,
  SET_TOKEN
} from '../mutation-types'
import * as actions from '../actions/user'
import storage from '../../utils/storage'
import {
  STORAGE_KEY
} from '../../utils/const'

const state = {
  userinfo: {
    username: 'admin'
  },
  token: storage.getItem(STORAGE_KEY.TOKEN) || ''
}

const mutations = {
  [SET_USERINFO] (state, userinfo) {
    state.userinfo = userinfo || {}
  },

  [SET_TOKEN] (state, token) {
    if (token) {
      storage.setItem(STORAGE_KEY.TOKEN, token)
    } else {
      storage.removeItem(STORAGE_KEY.TOKEN)
    }
    storage.setItem(STORAGE_KEY.LAST_LOGIN_TIME, Date.now())
    state.token = token || ''
  }
}

export default {
  state,
  actions,
  mutations
}
 
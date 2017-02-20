import {
  SET_USERINFO
} from '../mutation-types'

const state = {
  userinfo: {
    username: 'admin'
  }
}

const mutations = {
  [SET_USERINFO](state, userinfo) {
    state.userinfo = userinfo || {}
  }
}

export default {
  state,
  mutations
}
 
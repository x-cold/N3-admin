import { SET_USERINFO, SET_TOKEN} from '../mutation-types'
import Vue from 'vue'
import API from '../../api'
import qs from 'qs'

export const login = ({ commit }, form) => {
  return Vue.http.post(API.USER_LOGIN, qs.stringify(form)).then(data => {
    commit(SET_TOKEN, data.session)
    return data
  })
}

export const logout = ({ commit }) => {
  commit(SET_TOKEN, '')
}

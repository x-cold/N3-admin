import {
  makeActions
} from './util'

import {
  SET_USERINFO
} from '../mutation-types'


export const login = form => {
  const userInfo = {}

  makeActions(SET_USERINFO, userInfo)
}

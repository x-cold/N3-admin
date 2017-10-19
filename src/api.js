import {
  IS_DEV
} from './config'

const API = {
  // ROOT: IS_DEV ? '/api' : 'http://abc.com/api',
  ROOT: '/api',

  USER_LOGIN: '/user/login',
  USER_ADD: '/user/add',
  RECORD_LIST: '/user/getRecords',
  QUERY_LIST: '/user/getRecordsBy'
}

export default API

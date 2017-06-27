/**
 * Random Password
 * @description Base64 随机密码串
 * 
 * @param {Number} size 密码长度
 * @return {String} 
 * 
 */
export const randomPassword = (size) => {
  const seed = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z', 'a','b','c','d','e','f','g','h','i','j','k','m','n','p','Q','r','s','t','u','v','w','x','y','z',
  '2','3','4','5','6','7','8','9'
  )
  let seedlength = seed.length
  let createPassword = ''
  let j
  for (let i=0; i < size; i++) {
    j = Math.floor(Math.random() * seedlength)
    createPassword += seed[j]
  }
  return createPassword
}

import moment from 'moment'
/**
 * Date Parse
 */
export const dateParse = (str, format) => {
  if (typeof str != 'string') {
    return str
  }
  return moment(str, format).toString()
}

/**
 * Date Format
 */
export const dateFormat = (str, format) => {
  str = str || new Date()
  return moment(str).format(format)
}
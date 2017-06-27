import Vue from 'vue'

const filters = {
  toCryptedPhone (val) {
    if (!val) {
      return ''
    }
    return val.substr(0, 3) + '****' + val.substr(7)
  },
  toDateTime (stamp) {
    if (!stamp || isNaN(parseInt(stamp))) {
      return '-'
    }
    return new Date(parseInt(stamp)).toLocaleString()
  },
  toPercentage (val) {
    return (val * 100).toFixed(2) + '%'
  }
}
export default {
  install () {
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
  }
}

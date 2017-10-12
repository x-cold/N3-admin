var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')

var mock = new MockAdapter(axios)

mock.onPost('/user/login').reply(200, {
  state: 'success',
  data: {
    accoutId: 'xxx',
    session: 'xxxxxxxxxxx'
  }
})

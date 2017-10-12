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

mock.onPost('/user/add').reply(200, {
  state: 'success',
  data: {
    accoutId: 'xxx',
    session: 'xxxxxxxxxxx'
  }
})

const result = {
  data: [
    {
      queryRecordId: 'zzzzz',
      queryDate: new Date(),
      userId: 'bbbbb',
      ipAddress: '127.0.0.1',
      queryType: 2,
      timeConsuming: 200
    },
    {
      queryRecordId: 'zzzzz',
      queryDate: new Date(),
      userId: 'bbbbb',
      ipAddress: '127.0.0.1',
      queryType: 2,
      timeConsuming: 200
    },
    {
      queryRecordId: 'zzzzz',
      queryDate: new Date(),
      userId: 'bbbbb',
      ipAddress: '127.0.0.1',
      queryType: 2,
      timeConsuming: 200
    },
    {
      queryRecordId: 'zzzzz',
      queryDate: new Date(),
      userId: 'bbbbb',
      ipAddress: '127.0.0.1',
      queryType: 2,
      timeConsuming: 200
    },
    {
      queryRecordId: 'zzzzz',
      queryDate: new Date(),
      userId: 'bbbbb',
      ipAddress: '127.0.0.1',
      queryType: 2,
      timeConsuming: 200
    },
    {
      queryRecordId: 'zzzzz',
      queryDate: new Date(),
      userId: 'bbbbb',
      ipAddress: '127.0.0.1',
      queryType: 2,
      timeConsuming: 200
    }
  ],
  total: 1000
}

mock.onGet('/user/getRecords').reply(200, {
  state: 'success',
  result
})

mock.onGet('/user/getRecordsBy').reply(200, {
  state: 'success',
  result
})

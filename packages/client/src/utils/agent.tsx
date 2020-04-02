import request from 'superagent'

const agent = request.agent().use(function (request) {
  request.url = 'http://localhost:8000' + request.url
  return request
})

export { agent }

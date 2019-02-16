const http = require('http')
const port = 3000
const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')

    require('url').parse('/status?name=ryan')
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=ryan',
  query: 'name=ryan',
  pathname: '/status',
  path: '/status?name=ryan',
  href: '/status?name=ryan' }
  
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        console.log('something bad happened', err)
return
    }
    console.log(`server is listening on ${port}`)
})
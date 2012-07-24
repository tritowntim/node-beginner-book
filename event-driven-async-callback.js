var http = require('http')

function onRequest(req, res) {
	console.log('')
	console.log('Request received.')
	console.log(req.url)
	console.log(req.headers)
	res.writeHead(200, {'Content-Type' : 'text/plain'})
	res.write('Hello World')
	res.end()
}

http.createServer(onRequest).listen(8000)
console.log('Server has started.')
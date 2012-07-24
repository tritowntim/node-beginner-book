
var http = require('http'),
	url = require('url')
	port = 8888

function start(route) {

	function onRequest(req, res) {
		
		var pathname = url.parse(req.url).pathname
		if (pathname !== '/favicon.ico') {
			console.log('Received request for ' + pathname)			
			route(pathname)
		}

		res.writeHead(200, {'Content-Type':'text/plain'})
		res.write('First ever module')
		res.end()
	}

	http.createServer(onRequest).listen(port)
	console.log('Server has started on port ' + port)

}

exports.start = start

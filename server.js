
var http = require('http'),
	url = require('url')
	port = 8888

function start(route, handle) {

	function onRequest(req, res) {
		
		var pathname = url.parse(req.url).pathname
		var content = ''
		if (pathname !== '/favicon.ico') {
			console.log('Received request for ' + pathname)			
			content = route(pathname, handle, res)
		}
	}

	http.createServer(onRequest).listen(port)
	console.log('Server has started on port ' + port)

}

exports.start = start

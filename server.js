
var http = require('http'),
	url = require('url')
	port = 8888

function start(route, handle) {

	function onRequest(req, res) {
		
		var pathname = url.parse(req.url).pathname
		if (pathname !== '/favicon.ico') {
			route(pathname, handle, res, req)
		}

	}

	http.createServer(onRequest).listen(port)
	console.log('Server has started on port ' + port)

}

exports.start = start

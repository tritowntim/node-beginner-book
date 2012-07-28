
var http = require('http'),
	url = require('url')
	port = 8888

function start(route, handle) {

	function onRequest(req, res) {
		
		var pathname = url.parse(req.url).pathname
		var content = ''
		var postData = ''

		req.on('data', function(postDataChunk) {
			postData += postDataChunk
			console.log('Received POST data chunk')
		})

		req.on('end', function() {
			if (pathname !== '/favicon.ico') {
				route(pathname, handle, res, postData)
			}
		})

	}

	http.createServer(onRequest).listen(port)
	console.log('Server has started on port ' + port)

}

exports.start = start


var http = require('http'),
	port = 8888

function start() {

	function onRequest(req, res) {
		console.log('Received request.')
		res.writeHead(200, {'Content-Type':'text/plain'})
		res.write('First ever module')
		res.end()
	}

	http.createServer(onRequest).listen(port)
	console.log('Server has started on port ' + port)

}

exports.start = start

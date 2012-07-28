
function route(pathname, handle, res, postData) {

	console.log('Route a request for ' + pathname)

	if (typeof handle[pathname] === 'function') {
		return handle[pathname](res, postData)
	} else {
		console.log('No request handler found for ' + pathname)
		res.writeHead(404, {'Content-Type' : 'text/plain'})
		res.write('404 Not Found')
		res.end()
	}
}

exports.route = route


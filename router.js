
function route(pathname, handle) {

	console.log('Route a request for ' + pathname)

	if (typeof handle[pathname] === 'function') {
		return handle[pathname]()
	} else {
		console.log('No request handler found for ' + pathname)
	}
}

exports.route = route



var server = require('./server'),
	router = require('./router'),
	requestHandlers = require('./requestHandlers')

var handle = {}
handle['/'] = requestHandlers.start
handle['/show'] = requestHandlers.show
handle['/start'] = requestHandlers.start
handle['/upload'] = requestHandlers.upload

server.start(router.route, handle)

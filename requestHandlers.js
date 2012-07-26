
var exec = require('child_process').exec

function start(res) {
	log('START begin')

	exec('find /',
		{timeout: 20000, maxBuffer: 20000 * 1024},
		function(error, stdout, stderr) {
			res.writeHead(200, {'Content-Type' : 'text/plain'})
			res.write(stdout)
			res.end()
			log('START end')
		})

}

function upload(res) {
		log('UPLOAD begin')
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.write('Request handler "upload" was called')
		res.end()
		log('UPLOAD end')
}

function log(txt) {
	console.log(new Date() + ' ' + txt)
}

exports.start = start
exports.upload = upload


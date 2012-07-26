
var exec = require('child_process').exec

function start(res) {
	log('Request handler "start" was called')

	exec('ls -lah', function(error, stdout, stderr) {
		console.log(stdout)
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.write(stdout)
		res.end()
	})

}

function upload(res) {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.write('Request handler "upload" was called')
		res.end()
}

function log(txt) {
	console.log(new Date() + ' ' + txt)
}

exports.start = start
exports.upload = upload


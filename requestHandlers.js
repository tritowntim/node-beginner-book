
var exec = require('child_process').exec,
	child


function start() {
	log('Request handler "start" was called')
	var content = ''

	exec('ls -lah', function(error, stdout, stderr) {
		content = stdout
	})

	return content
}

function upload() {
	log('Request handler "upload" was called.')
	return 'Hello Upload'
}

function log(txt) {
	console.log(new Date() + ' ' + txt)
}

exports.start = start
exports.upload = upload


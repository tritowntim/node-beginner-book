
function start() {
	log('Request handler "start" was called, sleep ten seconds...')

	function sleep(millisecs) {
		var start = new Date().getTime()
		while (new Date().getTime() < start + millisecs);
	}

	sleep(10000)
	log('Sleep has ended')
	return 'Hello Start'
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



var querystring = require('querystring'),
	fs = require('fs'),
	formidable = require('formidable')

function start(res, postData) {
	log('START begin')

	var body = '<html>'+
	    '<head>'+
	    '<meta http-equiv="Content-Type" content="text/html; '+
	    'charset=UTF-8" />'+
	    '</head>'+
	    '<body>'+
	    '<form action="/upload" enctype="multipart/form-data" method="post">'+
	    '<input type="file" name="upload" multiple="multiple">'+
	    '<input type="submit" value="Upload file" />'+
	    '</form>'+
	    '</body>'+
	    '</html>';

	res.writeHead(200, {'Content-Type' : 'text/html'})
	res.write(body)
	res.end()
	log('START end')

}

function upload(res, req) {
		log('UPLOAD begin')

		var form = new formidable.IncomingForm()
		form.parse(req, function(err, fields, files) {
			fs.rename(files.upload.path, '/tmp/test.png', function(err) {

			})
		})
		res.writeHead(200, {'Content-Type' : 'text/html'})
		res.write('Received image <br/>')
		res.write('<img src="/show" />')
		res.end()
		log('UPLOAD end')
}

function show(res) {
	log('SHOW begin')
	fs.readFile('/tmp/test.png', 'binary', function(err, file) {
		if(err) {
			res.writeHead(500, {"Content-Type" : "text/plain"})
			res.write(err + '\n')
		} else {
			res.writeHead(200, {"Content-Type" : "image/png"})
			res.write(file, 'binary')
		}
		res.end()
		log('SHOW end')
	})
}

function log(txt) {
	console.log(new Date() + ' ' + txt)
}

exports.start = start
exports.upload = upload
exports.show = show


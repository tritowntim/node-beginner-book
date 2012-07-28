
var querystring = require('querystring')

function start(res, postData) {
	log('START begin')

var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

			res.writeHead(200, {'Content-Type' : 'text/html'})
			res.write(body)
			res.end()
			log('START end')

}

function upload(res, postData) {
		log('UPLOAD begin')
		res.writeHead(200, {'Content-Type' : 'text/html'})
		res.write('Thank you for uploading this: <br/>' + querystring.parse(postData).text)
		console.log(postData)
		res.end()
		log('UPLOAD end')
}

function log(txt) {
	console.log(new Date() + ' ' + txt)
}

exports.start = start
exports.upload = upload


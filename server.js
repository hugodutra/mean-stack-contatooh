var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function(){
	console.log('Chablau porta ' + app.get('port'));
});
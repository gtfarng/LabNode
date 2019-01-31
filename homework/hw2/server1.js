var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var server = net.createServer();
server.listen(PORT, HOST);

server.on('connection', function(sock) 
{
 	console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
 	sock.on('data', function(data) 
 	{
 		console.log('DATA ' + sock.remoteAddress + ': ' + data);
 		sock.write("OK!");
 	});

 	sock.on('close', function(data) 
 	 {
 		console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
 	});
});
console.log('Server listening on ' + HOST +':'+ PORT);
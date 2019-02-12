var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var number =(Math.random() * 21).toFixed(0);
var i=1;

net.createServer(function(sock) 
{
 	console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
 	sock.on('data', function(data) 
 	{
 		if(data==number)
 		{
 			console.log('DATA ' + sock.remoteAddress + ': ' + data);
 		    sock.write("BINGO!");
 		    client.destroy()
 		}
 		else if(i<5)
 		{
 			console.log('DATA ' + sock.remoteAddress + ': ' + data);
 		    sock.write("Wrong!");
            i++;
 		     		}
 		else 
 		{
 			console.log('DATA ' + sock.remoteAddress + ': ' + data);
 		    sock.write("Game Over!");
            client.destroy()

 		}
 		//console.log('DATA ' + sock.remoteAddress + ': ' + data);
 		//sock.write("OK!");
 	});

 	sock.on('close', function(data) 
 	{
 		console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
 	});
 	
}).listen(PORT, HOST);
console.log('Server listening on ' + HOST +':'+ PORT);

var net = require('net');
var HOST = 'localhost';
var PORT = 6969;
var client = new net.Socket();
var num=(Math.random() * 21).toFixed(0);

client.connect(PORT, HOST, function() 
{
 	console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 	client.write('Jatupat Pannoi ID 5735512002');
 	//client.write((Math.random() * 21).toFixed(0));
 	//client.write(num);
});


client.on('data', function(data) 
{
 	console.log('Server Send: ' + data);
 	client.write(num);
 	console.log('Client Send: ' + (Math.random() * 21).toFixed(0));
});



// Add a 'close' event handler for the client socket
/*client.on('close', function() 
{
 	console.log('Connection closed');
});
*/
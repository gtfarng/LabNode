var net = require('net');
var HOST = 'coc.waterphuket.com';
var PORT = 6969;
var answer = 0;
var client = new net.Socket();

client.connect(PORT, HOST, function() 
{
  	console.log('CONNECTED TO: ' + HOST + ':' + PORT);
  	client.write('5x35512002');
});

client.on('data', function(data) 
{
	console.log('Server: ' + data);

	console.log(answer)
	if(data=='OK')
	{
		answer=Math.floor(Math.random() * 21);
		client.write(answer.toString());
	}
	else if(data=='WRONG')
	{
		answer=Math.floor(Math.random() * 21);
		client.write(answer.toString());
	}
	else if(data == 'BINGO')
	{
		client.destroy()
	}
	else if(data == 'END')
	{
		client.destroy()
		client.connect(PORT, HOST, function() {
		 console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 		client.write('5x35512002');
		});
	}


});
// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});
var net = require('net');
//var HOST = 'coc.waterphuket.com';
//var HOST = 'localhost';
//var PORT = 6969;
var client = new net.Socket();
var i=0
/*
client.connect(PORT, HOST, function() 
{
 	console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 	console.log('Connection complete');
 	client.write('Test');
});

client.on('data', function(data) 
{
 	console.log('Name: ' + data);
 	client.destroy();
});

// Add a 'close' event handler for the client socket

client.on('close', function() 
{
 	console.log('Connection closed');
});
*/

client.connect(6969,'coc.waterphuket.com', function() 
{
  	console.log('Connection complete');
 	client.write('Test1');
 	 	

});

client.on('data', function(data) 
{ 		
	 	 		
 	console.log("Receive"+i+ " :"+ data);
 	client.write((Math.random() * 21).toFixed(0));
 	
 	
});


client.on('close', function() 
{
 	 		console.log('Connection closed');
});



/*
client.on('data', function(data) 
{
 	
 	console.log('Receive 2.:' + data);
 	client.write((Math.random() * 21).toFixed(0));
});

client.on('data', function(data) 
{
 	
 	console.log('Receive 3.:' + data);
 	client.write((Math.random() * 21).toFixed(0));
});

client.on('data', function(data) 
{
 	
 	console.log('Receive 4.:' + data);
 	client.write((Math.random() * 21).toFixed(0));
});
client.on('data', function(data) 
{
 	
 	console.log('Receive 5.:' + data);
 	client.write((Math.random() * 21).toFixed(0));
 	client.destroy()
});
*/

 


/*

client.on('data', function(data) 
{
 	console.log('Receive 2.:' + data);
 	
});
*//*
client.on('data', function(data) 
{
 	console.log('Receive 3.:' + data);
 	client.write(parseInt('3'));
});

client.on('data', function(data) 
{
 	console.log('Receive 4.:' + data);
 	client.write(parseInt('4'));
});

client.on('data', function(data) 
{
 	console.log('Receive 5.:' + data);
 	client.write(parseInt('5'));
 	client.destroy();
});
*/

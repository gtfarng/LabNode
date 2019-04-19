var net = require('net');
//var HOST = 'coc.waterphuket.com';
var HOST = 'localhost';
var PORT = 6969;
var answer = 0;
var client = new net.Socket();

client.connect(PORT, HOST, function() 
{
  	console.log('CONNECTED TO: ' + HOST + ':' + PORT);
  	client.write('5735512002');
});

client.on('data', function(data) 
{
	console.log('Server: ' + data);

	console.log(answer)
	if(data=='OK!')
	{
		answer=Math.floor(Math.random() * 21);
		client.write(answer.toString());
	}
	else if(data=='WRONG!')
	{
		answer=Math.floor(Math.random() * 21);
		client.write(answer.toString());
	}
	else if(data == 'BINGO!')
	{
		console.log('You Winner!');
		 		
 			const request = require('request')

 			request(
 			{
   				method: 'POST',
   				uri: 'https://notify-api.line.me/api/notify',
   				header: 
   				{
     				'Content-Type': 'application/x-www-form-urlencoded',
   				},
   				auth: 
   				{
     				bearer: 'J8lsL9oRiCUfdgs9H5c4eu0K6XiyuExvn7Vn0NU1M51', //token
   				},
  				form: 
  				{
     				message: 'You Winner!', 
   				},
 			}, 
 			(err, httpResponse, body) => 
 			{
   		 	if (err)  	
   		 	 	{
     				console.log(err)
   				} 
   			else 
   			 	{
     				console.log(body)
   				}
 			})


		client.destroy()
	}
	else if(data == 'END!')
	{
		client.destroy()
		client.connect(PORT, HOST, function() {
		 console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 		client.write('5735512002');
		});
	}


});
// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});
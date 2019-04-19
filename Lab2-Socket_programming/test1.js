var dgram = require('dgram');
var message = new Buffer("test test test");
var client = dgram.createSocket("udp4");

client.send(message, 0, message.length, 6969, "coc.waterphuket.com",function(err, bytes) 
 	{
 	 	client.close();
 	}
);
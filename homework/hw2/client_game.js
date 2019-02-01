var net = require('net');
var HOST = 'coc.waterphuket.com';
var PORT = 6969;
var client = new net.Socket();
var num=1;
var num1=(Math.random() * 21).toFixed(0);
var num2=(Math.random() * 21).toFixed(0);
var num3=(Math.random() * 21).toFixed(0);
var num4=(Math.random() * 21).toFixed(0);
var num5=(Math.random() * 21).toFixed(0);
var i=0

client.connect(PORT, HOST, function() 
{
 	console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 	client.write("LockerZ");
 	//client.write((Math.random() * 21).toFixed(0));
 	//client.write(num);
});


client.on('data', function(data) 
{
	console.log('Server Send: ' + data);
        client.write(''+num1);
	client.on('data', function(data) 
{
    console.log('Server Send: ' + data);
        client.write(''+num2);
    
    client.on('data', function(data) 
{
    console.log('Server Send: ' + data);
        client.write(''+num3);
    
    client.on('data', function(data) 
{
    console.log('Server Send: ' + data);
        client.write(''+num4);
    
    client.on('data', function(data) 
{
    console.log('Server Send: ' + data);
        client.write(''+num5);
        client.destroy()
    
   
    
});
   
    
});
   
    
});
   
    
});
 	
   
 	
});

//client.write(num);
    //console.log('Client Send: ' + data);

 /* console.log('Server Send: ' + data);
        client.write(''+num);
    console.log('Server Send: ' + data);
        client.destroy()*/

// Add a 'close' event handler for the client socket
/*client.on('close', function() 
{
 	console.log('Connection closed');
});
*/
/*let stdin = process.openStdin()
let x,y
	
stdin.addListener("data",function(x) 
{
console.log(x.toString().trim())
 stdin.end()
});

process.stdin.on('data', function(x) 
	                      { console.log(x) })

*/

let stdin = process.openStdin()
stdin.addListener("data", function(data)  
{
console.log(data.toString().trim())

});
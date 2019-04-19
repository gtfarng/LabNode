let p1 = require('./lib/libProgram1.js');
let p2 = require('./lib/libProgram2.js');
let p3 = require('./lib/libProgram3.js');
/*
const readline = require('readline').createInterface
({
   	input: process.stdin,
  	output: process.stdout
})

console.log("You Enter Number to select program")
console.log("Enter 1 : Program Convert day")
console.log("Enter 2 : Program BMI")
console.log("Enter 3 : Program Factorial")
console.log("Enter any : Exit Program ")
readline.question("You Select program : ", (program) => 
{

    if(program==1)
 	{
 		p1.Program1()
 			
 	}
 		
 	else if(program==2)
 	{
 		p2.Program2()
 			
  	}	
 		
 	else if(program==3)
 	{
 	 	p3.Program3()
 	}
 	else
 	{
 		console.log("Exit Program")
 	}
    readline.close()
      
})

*/
let program = 1

 	if(program==1)
 	{
 		p1.Program1()	
 	}
 		
 	else if(program==2)
 	{
 		p2.Program2()	
  	}	
 		
 	else if(program==3)
 	{
 	 	p3.Program3()
 	}
 	else
 	{
 		console.log("Exit Program")
 	}
/*
 		p1.Program1()
 		p2.Program2()
 		p3.Program3()
 	
*/	
 	
	
	
 	


	
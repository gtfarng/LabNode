module.exports.Program1 =  () => 
 						{
 						

	 						const readline = require('readline').createInterface
 							({
   								input: process.stdin,
  								output: process.stdout
 							})

 							console.log("This program to convert days to year, month and week  ")
 							readline.question("Enter total day: ", (day) => 
 							{
       							year=day/365
       							month=day/30
       							week=day/7
       							console.log(+day +" days is " +year.toFixed(0) + " year" )
       							console.log(+day +" days is " +month.toFixed(0) + " month" )
       							console.log(+day +" days is " +week.toFixed(0) + " week" )
      
       							readline.close()
      
 							 	})
 						}     


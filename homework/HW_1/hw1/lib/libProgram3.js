module.exports.Program3 =  () => 
 						{
 						

	 						const readline = require('readline').createInterface
              ({
                input: process.stdin,
                output: process.stdout
              })

              readline.question("Enter number : ", (n) => 
              {
                var factorial=1
                    for(let i=1;i<1+parseInt(n);i++)
                    {
                        factorial *= i
                    }   
                    console.log(+n  +"! (factorial) = " +factorial +"\n" )       
     
                    readline.close()
      
              })


 						}     


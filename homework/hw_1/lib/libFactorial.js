module.exports.Factorial =  () => 
{
 	let stdin = process.openStdin() 
 	let factorial=1,num

 	  console.log("\n")
    console.log("Program : Factorial ")

    console.log("Enter number : ")
    stdin.addListener("data", (n) => 
	 		{    
                num=n.toString().trim()
                for(let i=1;i<1+parseInt(num);i++)
                    {
                        factorial *= i
                    }   
                    console.log(+n  +"! (factorial) = " +factorial +"\n" )       
     
                    stdin.destroy()  
    
 			});
 
}
    
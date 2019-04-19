module.exports.BMI =  () => 
{
 	let stdin = process.openStdin() 
 	let w,h,bmi

 	  console.log("\n")
    console.log("Program : BMI ")

    console.log("Enter your weight (Kg.) : ")
    stdin.addListener("data", (weight) => 
	 		{    w=weight.toString().trim()
		 		   
           console.log("Enter your height (M.) : ")
		 		   stdin.addListener("data", (height) => 
	 		     {    h=height.toString().trim()
		 		        bmi=w/h*h
                
                console.log("\n")
                console.log("You have weight: "+w +" Kilograms")
                console.log("You have height: "+h +" Meter") 
                console.log("You have BMI: "+bmi.toFixed(2));

                if(bmi<18.5)
                      console.log("You are Underweight\n")
                else if(bmi>=18.5&&bmi<=24.99)
                      console.log("You are Normal range\n")
                else if(bmi>=25)
                      console.log("You are Overweight\n")

            stdin.destroy()  
 			      });
		 		 
 			});
 
}
    
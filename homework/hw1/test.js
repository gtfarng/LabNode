const readline = require('readline').createInterface
({
  input: process.stdin,
  output: process.stdout
})

readline.question("Enter your weight (Kg.) : ", (w) => 
{
      console.log("Weight is " +w + " Kg." )
      readline.question("Enter your height (M.) : ", (h) => 
      {
          console.log("Height is " +h + " M." )
          bmi=w/(h*h)
          console.log("BMI = " + bmi.toFixed(2))
          if(bmi<18.5)
  	          console.log("You are Underweight")
          else if(bmi>=18.5&&bmi<=24.99)
  	          console.log("You are Normal range")
          else if(bmi>=25)
  	          console.log("You are Overweight")
      readline.close()
      })
})


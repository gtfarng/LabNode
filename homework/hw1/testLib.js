/*require('./lib.js');
f1();*/

//let l0 = require('./lib/lib.js');
//import library
let l1 = require('./lib/libBMI.js');
let l2 = require('./lib/libFactorial.js');
let l3 = require('./lib/libDayc.js');

var num=8,fac=1
var w=55,h=1.70
var Day=365
//console.log(l1.myfoo());
//console.log(l1.sum3(1)(2)(3));

//Program1 BMI
console.log("\n")
console.log("Program 1 : BMI ")
console.log("You have weight: "+w +" Kg.")
console.log("You have height: "+h.toFixed(2) +" M.")
console.log("You have BMI: "+l1.BMI(w)(h).toFixed(2));
if(l1.BMI(w)(h).toFixed(2)<18.5)
  	          console.log("You are Underweight")
          else if(l1.BMI(w)(h).toFixed(2)>=18.5&&l1.BMI(w)(h).toFixed(2)<=24.99)
  	          console.log("You are Normal range")
          else if(l1.BMI(w)(h).toFixed(2)>=25)
  	          console.log("You are Overweight")

//Program2 factorial
console.log("\n")
console.log("Program 2 : Factorial ")
console.log(+num+"! <Factorial> = "+l2.factorial(num)(fac));


//Program3 Day Convert
console.log("\n")
console.log("Program 3 : Day Convert ")
console.log(+l3.Dayc(Day));


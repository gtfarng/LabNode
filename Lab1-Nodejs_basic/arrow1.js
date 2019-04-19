setTimeout( () => { 
	   console.log("done"); 
	              }, 10000)

CurriedAdd = (x) => (y)	=> x+y
console.log(CurriedAdd(5)(5))

sum3 = (x) => (y) => (z) => x+y+z
console.log(sum3(1)(2)(3)) 




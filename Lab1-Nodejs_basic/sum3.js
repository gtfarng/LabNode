
function sum3(x)
{     return function(y)
      { 
      	return function(z)
      	{
               return x+y+z;
      	}
      }
};
console.log("Sum3 function model curry fuction : "+sum3(1)(2)(3));





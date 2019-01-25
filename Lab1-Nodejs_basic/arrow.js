
//non-arrow
function Add(x)
{
     return function(y)
      { 
      	return x+y
      }
};
//z = Add(2);
//z(3)

console.log(Add(2)(3));
//traditional
function Add1(x,y)
{
     return x+y;
      
};
console.log(Add1(2,3));
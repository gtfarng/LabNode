
//non-arrow curry function
function Add_N(x)
{
     return function(y)
      { 
      	return x+y;
      }
};
console.log("Add function model non-arrow curry function : "+Add_N(2)(3));

//traditional fuction
function Add_T(x,y)
{
     return x+y;
      
};
console.log("Add function model traditional fuction : "+Add_T(2,3));


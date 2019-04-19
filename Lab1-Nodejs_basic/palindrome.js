function palindrome(str) 
{    var re = /[^A-Za-z0-9]/g;
     str = str.toLowerCase().replace(re, '');
     var len = str.length;
     for (var i = 0; i < len/2; i++) 
     {
          if (str[i] !== str[len - 1 - i]) 
          {
             return false;
          }
     }
     return true;
}

console.log(palindrome("Jatupat"));
/*
let stdin = process.openStdin()
stdin.addListener("data", function(data)  
{
console.log(palindrome(data));

});
*/
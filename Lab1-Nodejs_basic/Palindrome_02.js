console.log("Enter your message: ");
objPalindrome={ palindrome(str) 
 				{    var re = /[^A-Za-z0-9]/g;
      				 str = str.toLowerCase().replace(re, '');
      				 var len = str.length;
      				 for (var i = 0; i < len/2; i++) 
      				 {
           				if (str[i] !== str[len - 1 - i]) 
           				{
          	  					ans="This message is not palindrome"
              					return ans;
           				}
      				}
      					ans="This message is  palindrome"
      					return ans;
 				} 				
}

process.stdin.once('data', (message) => 
{
    let text = message.toString().trim();
    console.log("From Message, " + text );

    console.log(objPalindrome.palindrome(text));
 	process.exit();
}
);

/*
palindrome => (str) =>
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
*/








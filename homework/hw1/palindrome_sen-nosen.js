////Palindrome non case sensitive && Palindrome case sensitive
console.log("Enter your message: ");
objPalindrome={ palindrome_sen(str1) 
 				{      var re = /[^A-Za-z0-9]/g;
      				 str = str1.replace(re, '');
      				 var len = str1.length;
      				 for (var i = 0; i < len/2; i++) 
      				 {
           				if (str1[i] !== str1[len - 1 - i]) 
           				{
          	  					ans="This message is not Palindrome <case sensitive>"
              					return ans;
           				}
      				}
      					ans="This message is  Palindrome <case sensitive>"
      					return ans;
 				},
        palindrome_nosen(str2) 
        {      var re = /[^A-Za-z0-9]/g;
               str2 = str2.toLowerCase().replace(re, '');
               var len = str2.length;
               for (var i = 0; i < len/2; i++) 
               {
                  if (str2[i] !== str2[len - 1 - i]) 
                  {
                        ans="This message is not Palindrome <non case sensitive>"
                        return ans;
                  }
              }
                ans="This message is  Palindrome <non case sensitive>"
                return ans;
        }				
}

process.stdin.once('data', (message) => 
{
    let text = message.toString().trim();
    console.log("From message, : " + text );

    console.log(objPalindrome.palindrome_sen(text));
    console.log(objPalindrome.palindrome_nosen(text));
 	process.exit();
}
);


/*fs=require("fs")
fs.readFileSync('text.txt', (err,data) =>
               {
                if(err)
                   	 return console.error(eer)
                else
                   	 console.log(data.toString())
               });
console.log(fs.readFileSync('text.txt'))
console.log("Finished")
*/
fs = require('fs');
fs.readFile('text.txt', (err, data) => {
  if (err) 
  	{  
  		return console.error(eer)
     }          
  else
          console.log(data.toString())
});

console.log("Finished")
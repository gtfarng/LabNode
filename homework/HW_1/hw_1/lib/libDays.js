module.exports.Days =  () => 
{
 	let stdin = process.openStdin() 
 	let day, week, month, year, nday , nnday

 	console.log("\n")
    console.log("Program : Days ")

    console.log("Enter total day : ")
     stdin.addListener("data", (d) => 
            {   nnday=d.toString().trim()  
               
                year=nnday/365
                nday=nnday%365
                month=nday/30
                week=(nday%30)/7
                day=(nday%30)%7
     
                console.log(+nnday +" days is " +year.toFixed(0) 
                             +" year "+month.toFixed(0) 
                             + " month "+week.toFixed(0) 
                             + " week " +day.toFixed(0) 
                             + " day ")
                
                stdin.destroy()  
    
 			});
 
}
    
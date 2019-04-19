module.exports.Dayc = function (x)
{ 
 	 let year=x/365
 	 let nday=x%365
     let month=nday/30
     let week=(nday%30)/7
     let day=(nday%30)%7
 	 
 
      console.log(x +" days is " +year.toFixed(0) 
      	             +" year "+month.toFixed(0) 
      	             + " month "+week.toFixed(0) 
      	             + " week " +day.toFixed(0) 
      	             + " day ")

 	return true
}
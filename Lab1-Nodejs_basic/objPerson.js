let objPerson
objPerson={name:"Bob",
           age:45,
           objBirthday:{Day:5,Month:11,Year:1900},
           max(x,y){ if(x>y) 
                            return x;
                     else
                            return y;}
           }
          
console.log("Name :" +objPerson.name)
console.log("Age :" +objPerson.age)
console.log("Birthday: " +objPerson.objBirthday.Day+"/" 
	                     +objPerson.objBirthday.Month+"/" 
	                     +objPerson.objBirthday.Year)
console.log("Max :"+objPerson.max(10,1))
console.log("Max :"+objPerson.max(1,10))

objPerson.max.description="find max"
console.log(objPerson.max)


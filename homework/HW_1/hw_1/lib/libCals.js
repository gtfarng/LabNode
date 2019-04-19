module.exports.Cals =  () => 
{
 	let stdin= process.openStdin() 
   

 	objSub1 ={course:"Physics I"   , credit:3, sec:'01',grade:4}
    objSub2 ={course:"Math I"      , credit:3, sec:'01',grade:4}
    objSub3 ={course:"Chemistry"   , credit:3, sec:'02',grade:4}
    objSub4 ={course:"Intro to CPT", credit:3, sec:'02',grade:4}
    objSub5 ={course:"Table Tennis", credit:1, sec:'03',grade:4}
    let credit, gpa
    let a,b,c,d,e
 	console.log("\n")
    console.log("Program : Calculate GPA ")
    /*console.log(+"1."+objSub1.course+": ")
    stdin.addListener("data", (a) => 
            {    objSub1.grade=a.toString().trim()
                   
           console.log(+"2."+objSub2.course+": ")
                   stdin.addListener("data", (b) => 
                 {    objSub2.grade=b.toString().trim()

                    console.log(+"3."+objSub3.course+": ")
                   stdin.addListener("data", (c) => 
                 {    objSub3.grade=b.toString().trim()

                    console.log(+"4."+objSub4.course+": ")
                   stdin.addListener("data", (d) => 
                 {    objSub4.grade=b.toString().trim()

                    console.log(+"5."+objSub5.course+": ")
                   stdin.addListener("data", (e) => 
                 {    objSub5.grade=b.toString().trim()
*/
                        console.log("---------------------------------------------------------")
                        console.log(" \t\t GRADE REPORT\t\t\t\t|");     
                        console.log("---------------------------------------------------------")    
                        console.log("#   \tCourse\t\t\tSection\tCredit\tGrade\t|");     
                        console.log("---------------------------------------------------------")    
                        console.log("1.\t"+objSub1.course+"\t\t"  +objSub1.sec+"\t"+objSub1.credit+"\t"+objSub1.grade+"\t|")     
                        console.log("2.\t"+objSub2.course+"\t\t\t"+objSub2.sec+"\t"+objSub2.credit+"\t"+objSub2.grade+"\t|")       
                        console.log("3.\t"+objSub3.course+"\t\t"  +objSub3.sec+"\t"+objSub3.credit+"\t"+objSub3.grade+"\t|")        
                        console.log("4.\t"+objSub4.course+"\t\t"  +objSub4.sec+"\t"+objSub4.credit+"\t"+objSub4.grade+"\t|")          
                        console.log("5.\t"+objSub5.course+"\t\t"  +objSub5.sec+"\t"+objSub5.credit+"\t"+objSub5.grade+"\t|")         
                        console.log("---------------------------------------------------------")

                        credit=objSub1.credit+objSub2.credit+objSub3.credit+objSub4.credit+objSub5.credit

                        gpa = ( objSub1.credit*objSub1.grade+objSub2.credit*objSub2.grade
                            +objSub3.credit*objSub2.grade+ objSub4.credit*objSub2.grade
                            +objSub5.credit*objSub2.grade )/credit; 
                  
                        console.log("---------------------------------------------------------")
                        console.log("GPA = "+gpa.toFixed(2)+"\t\t\t\t\t\t|")     
                        console.log("---------------------------------------------------------")
                        stdin.destroy()  
    /*                    });
                   });
                });
             });     
          });
  */                
 }
    
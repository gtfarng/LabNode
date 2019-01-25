let stdin = process.openStdin()
/*stdin.addListener("data", (d) => {
 console.log(d.toString().trim())
 stdin.end()
});
*/


stdin.addListener("data",function (d)  {
 console.log(d.toString().trim())
 stdin.end()
});



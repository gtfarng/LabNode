let stdin = process.openStdin()
stdin.addListener("data", function (d) => {
 console.log(d.toString().trim())
 stdin.end()
});
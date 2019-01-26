/*var stdin = process.openStdin();

console.log("Enter X : "); 
stdin.on('data', (x) => 
	{ 
		
		console.log("X = " + x);
		//process.stdin.end()
    }
);

console.log("Enter Y : "); 
stdin.on('data', (y) => 
	{ 
		
		console.log("Y = " + y);
		//process.stdin.end()
    }
);

*/
/*
console.log("Enter X : ");
process.stdin.once('data', (x) => {
    let X = x.toString();
    console.log("X = " + X);
});

*/
/*
console.log("What is your name?");
        process.stdin.once('data', (chunk) => {
            let name = chunk.toString().trim();
            console.log("Hello, " + name + "!");
        });

        *//*
console.log("What is your name?");
process.stdin.once('data', (chunk) => {
    let name = chunk.toString().trim();
    console.log("Hello, " + name + "!");
    process.exit();
});*/

console.log("Enter your message: ");
process.stdin.once('data', (message) => {
    let text = message.toString().trim();
    console.log("Palindrome, " + text );
    process.exit();
});
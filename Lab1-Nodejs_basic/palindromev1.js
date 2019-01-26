/*console.log("Enter your message: ");
process.stdin.once('data', (message) => {
    let text = message.toString().trim();
    console.log("Palindrome, " + text );
    process.exit();
});
*/
console.log("What is your name?");
process.stdin.once('data', (chunk) => {
    let name = chunk.toString().trim();
    console.log("Hello, " + name + "!");
    process.exit();
});
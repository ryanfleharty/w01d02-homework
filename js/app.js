//1. What is the difference between interpolation and concatenation? Give an example of each.
//interpolation is when a value is inserted into an existing string via ${ref} placeholder into a longer string.
//concatenation is using the + operator to simply add strings together without using the placeholder inside the same string.

//2. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
//DRY stands for "Don't Repeat Yourself".
//Following DRY standards will result in easier to read, execute, and maintain code.
//loops (and functions) help us to write DRY code by allowing us to call the same code again in multiple places

//3. What is the difference between declaring a variable and assigning a value to a variable? What do we mean when we say "define" a variable?
//Declaring a variable simply reserves memory for it (gives a name to an address).
//Assigning a value to a variable will initialize the memory address (accessible by the name) to the value.

//4. When should we use const and when should we use let?
//We should use let when we want a variable to be able to be reassigned; const when it should be a constant.
//Best practice to start as a const until you need it to be a let and conciously change it back.

//5. Unix question: What is a "parent" directory?
//A parent directory is one above the current working directory. It's a folder one up the tree accessible via ..\ from the Terminal.

//6. Unix, again: If you're not sure about how to use a Unix command, how can you get more info without being connected to the internet?
//Use the "man" command to access the manual in the terminal or just type the command without any parameters or -flags

//7. More Unix: What is "tab completion" and why is it awesome?
//It's when you start typing a word in the terminal (or in your text editor) and hit tab and it auto-suggests a correct "completion" of that word to a variable or function call or directory name, etc.

// Part 2: Boolean expressions and operators
// ... and variable assignment

// Remember: Expressions in JavaScript are anything that can be said to have a value.
// Remember: Variable assignment is a right-to-left operation: the expression on the right side of the equal sign gets evaluated AND THEN put into the variable declared on the left side.
// Using the provided variable definitions, replace the blanks with mathematical or boolean operators that make the expression evaluate to true.
// Test your answers by using console.log in front of each expression in your answer file.
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a == a !== d);
console.log(e === 'Kevin');
console.log(48 == '48');

// Part 3: While loops
// Increase your code literacy by reading code, line by line. When you read code pretend to be the computer. It is absolutely essential that you understand what is happening each line of code you write.
// 1. Infinite loop?
// while (true) {
// 	console.log('Do not run this loop');
// }
//Infinite loop

// 2. Infinite loop II
// is the following loop an infinite loop? Why or why not?
// const runProgram = true;
// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }
//Not Infinite loop

// 3. Reading code
// Without running this loop, what is the expected output?
// Read the code line by line—everything happens in sequence. Add a comment before each line of code explaining what the line below it does. Then write down what output you expect to see in the console. Be patient with your thought! There is no rush. Time spent to really understand these fundamentals now will pay off a hundred fold in the coming weeks. Today we must master learn how to properly hold and use a knife and how to correctly chop an onion. Later we'll make complex dishes with many ingredients, herbs and spices!

//declares and assigns a new variable letters to the initial value "A".
let letters = "A";
//declares and assigns a new variable i to the initial value 0 for use in the while loop.
let i = 0;

//defines a while loop that will run until i < 20 resolves false
while (i < 20) {
  //concatenates and reassigns the string stored in letters appending another "A"
  letters += "A";
  //increments the while loop counter variable i by 1
	i++;
}

//prints the value of letters to the console
console.log(letters);
//the expected final string value printed is: 'AAAAAAAAAAAAAAAAAAAAA' (21 A's)

// Part 4: Loops!
// 1. for loops
// Answer the following question:
// Both for loops and while loops repeat code. But what are the differences? What are the similarities?
//For loops are used when you know exactly how many times you want to loop, while loops are used when you know the condition but do not necessarily know precisely when it will occur.
//While loops also are more likely to end up in an infinite loop and typically have a variable outside with a potentially global scope. For loops do not have those concerns.

// 2. Basic for loop
// Write a for loop that will console.log() the numbers 0 to 999.
for (let i = 0; i < 1000; i++) {
  console.log(i);
}

// 3. The mechanics of a for loop
// Here is an example for loop that prints a message 100 times:
// for (let i = 0; i < 100; i++) {
// 	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }
//What are the three components of the control statement? Each component is separated by a semicolon ;.
// The first part of the control statement is: the initialization (defines the counter variable)
// The second part of the control statement is: the condition expression (defines the condition to evaluate before each loop)
// The third part of the control statement is: the final expression (defines the operation to perform before looping again)

// 4. for loop in reverse
// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse: console.log() a countdown from 999 to 0.
for (let i = 999; i >= 0; i--) {
	console.log(i);
}

// 5. More counting
// Write a for loop that uses interpolation to print a message to the console that includes the current value of i.

// The loop should run from 1 to 10.
// Expected output in the console:
// The value of i is: 1 of 10
// The value of i is: 2 of 10
// The value of i is: 3 of 10

for (let i = 1; i <= 10; i++) {
  console.log(`The value of i is: ${i} of 10`);
}
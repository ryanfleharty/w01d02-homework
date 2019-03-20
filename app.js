//1. 
//Interpolation is the combination strings, including variables. Ex:
//const name = "Sami";
//console.log("Hello " + name)

//Concatenation is the combination of two strings.
//console.log("Hello " + "Sami");

//2.
//DRY stands for "Don't repeat yourself." We should keep DRY in mind
//in order to produce clean, concise code that's easy for others to
//understand to adjust. One tool we can use for DRY code is the for
//loop we practiced today, which automates variable changes in each 
//iteration.

//3. 
//Declaring a variable is introducing it for the first time with  
//`let` or `const'. Assigning a value to a variable sets it equal to
//a string, number, or other value. Defining a variable is when we
//both declare a variable's name and assign it a value.

//4. 
//We should use `const` in most circumstances, because it helps us
//communicate to other programmers that this variable's value should
//not be redefined. `let` should be used in contexts where the value
//will change of a certain variable, like in loops.

//5.
//A parent directory is the folder (directory) that holds the current
//file or directory that you're in.

//6.
//In order to pull up the manual in Bash, simply type `man` followed by the 
//command you're looking to learn more about.

//7.
//Tab completion is when we hit the tab key after typing the first character
//or two of the file or directory we're trying to work with.

//PART TWO
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a == a != d);
console.log(e === 'Kevin');
console.log(48 == '48');

//1.
//Yes, this is an example of an infinite loop, because the string is "truthy" and 
//will always result in the Boolean answer of "true".

//2.
//This is also an infinite loop, because runProgram is a const, which means it cannot
//be redefined and will always run as true. 

//3. 
//I think this code will not be able to run since it's mixing data types. I imagine 
//JS won't know how to progress through the alphabet from just knowing the starting 
//point of "A" and that it needs less than 20 iterations.
//The line below defines the variable letters.
// let letters = "A";
// //The line below defines the variable i.
// let i = 0;
// //The line below establishes the condition of the while loop, which will make this 
// //loop iterate 19 times.
// while (i < 20) {
// //The line below 
//     letters += "A";
// //The line below
//     i++;
// //The line below closes the while loop.
// }
// //The line below calls the letters loop.
// console.log(letters);
// //POST-RUNNING: The loop ran "A" twenty times, which happened with other strings 
//we did earlier today! I couldn't get past my conception of progressing through the 
//alphabet. 
// let letters = "A";
// let i = 0;

// while (i < 20) {
// 	letters += "A";
// 	i++;
// }

// console.log(letters);

//PART FOUR: LOOPS
//1.
//For loops are perfect for when you know how many iterations you will need, while
//while loops are perfect for when you know when you're done, but aren't sure how
//many iterations it will take to get there.

// //2.
// for (let i = 0; i <= 999; i++) {
// 	console.log(i);
// }

// //3. 
// //The first part of the control statement is the starting value.
// //The second part of the control statement is the maximum value.
// //The third part of the control statement is what makes the iterations occur
// //one at a time.

// //4. 
// // for (let i = 999; i >= 0; i--) {
// // 	console.log(i);
// // }

// //5.
// for (let i = 1; i < 11; i++) {
// 	console.log("The value of i is: " + i + " of 10");
// }
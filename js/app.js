// 1
// concatenation is combining two strings into one larger string.
// example of concatenation:
//                  console.log("Hello " "Ryan!");
// interpolation is when you combine strings and variables.
// example of interpolation:
//                  var teacher = "Ryan";
//                  console.log(`Hello ${teacher}!`);

// 2
// DRY stands for Don't Repeat Yourself
// DRY stands for Don't Repeat Yourself
// it is important for making efficient, readable, clean code.
// functions and Loops are useful tools.

// 3
// declaring a variable is when you first create a variable and assign it a value.
// assigning a value is when you change or assign a value to a preexisting, already declared, variable.
// defining a variable is when you assign a value to a declared variable.

// 4
// const is use with variables that will not have a value reassigned or changed later
// let is used for variables with values intended to be changed.

// 5
// a parent directory is a term to describe a directory with subdirectories within.

// 6
// use the Unix command '$ man' followed by the command in question.

// 7
// tab completion utilizes advanced machine learning and AI to autocomplete partially typed filenames within terminal.

//********* Part Two *********

// 1
  a !== b;
// 2
  c !== d;
// 3
  'Name' === 'Name'
// 4
  a < b < c;
// 5
  a === a < d;
// 6
  e === 'Kevin';
// 7
  48 == '48';

//********* Part Three *********

// 1
// this is an infinite loop, because "true" will always be true and thus the while loop will never end.

// 2
// this is not an infinite loop becasue the "runProgram = false;" portion would make the while condition false, ending the function.

// 3
// this line is declaring the variable "letters" and assigning it the value "A".
let letters = "A";
// this line is declaring the variable "i" and assigning it the value "0".
let i = 0;
// this line is creating a while loop and defining its parameters.
// specifically, it is saying that the following function will loop for as long as variable "i" is less than 20.
while (i < 20) {
// this line is adding an "A" to the string that defines the variable "letters".
	letters += "A";
// this line adds 1 to the value of the variable "i".
	i++;
// this line closes the loop.
}
// this line instructs the console to respond with the value of the variable "letters".
console.log(letters);
// the expected output of this code will be 20 "A"s consecutively.

//********* Part Four *********

// 1
// for loops usually loop a defined number of times and are very predictable.
// while loops usually loop based on some changing parameter that may be unpredictable.
// both loops cause a function to run when a defined parameter is true.

// 2
  for (let i = 0; i <= 999; i++) {
    console.log(i);
  }

// 3
// the first portion, "let i = 0;", declares the variable "i" and assigns it an initial value of 0.
// the second portion, "i < 100;", instructs the loop to run in all instances where the value of variable "i" is less than 100.
// the third portion, "i++", instucts the loop to add 1 to the value of variable "i" with each cycle.

// 4
  for (let i = 999; i > 0; i--) {
    console.log(i);
  }

// 5
  for (let i = 1; i <= 10; i++) {
  console.log(`The value of i is: ${i} of 10`);
  }

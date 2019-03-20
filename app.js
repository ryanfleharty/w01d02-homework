// 1.  The difference between interpolation and concatentation is that 
//concatentation allows us to add two strings together with +, 
//whereas Interpolation allows us to add variables as well. 

//An example of concactentation would be 
//let greeting = "Hello, my name is "
//let name = "Nick"

//let myName = greeting + name

//An example of interpolation would be
//const description = 'rainy';
//console.log('today the weather forecast is ' + description)


// 2.  DRY stands for Don't Repeat Yourself.  It's important because otherwise
// you'd end up spending time writing out code that is completely unnecessary.
// Loops are a programming tool developed for DRY code.

// 3.  Declaring a variable means that you are creating that variable
// and what type of variable it will be.  Defining a value to a variable
// means giving a value to an already existing variable.

// 4.  We should use Const for a variable that should never need to change
// whereas a let can be redefined at any time.

// 5.  A "parent" directory is a term that refers to the directory 
// above another directory.

// 6.  You can get help on the terminal without the internet simply by 
// typing "help" into the terminal.  

// 7.  tab completion allows us to type the first few letters/numbers for 
// a file or directory and simply hit the 'tab' button.  Tab completion
// fills in the rest.  It's awesome because it saves time and helps avoid
// typos and errors.

// Part 2 Boolean expressions and operators

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';


console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a <= a < d);
console.log(e === 'Kevin');
console.log(48 !== '48');

// Part 3 While loops

// 1.  Yes, this is an infinite loop because there is nothing to test. It
// will go on forever with nothing to verify.

// 2.  No this is not an infinite loop because runProgram cannot be changed 
// from true.  if runProgram is true it will not run.

// 3.  I am guessing it will print "A" to the console 20 times.

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

// 3.  I expected one 'A' per line on 20 lines, not A *20 on one line.

// Part 4 Loops!

// 1.  For and WHile loops are used to repeat a section of code.  The While
// loop will run indefinitely until a specified condition is met, whereas
// the For loop will run a specified amount of times and thats it.

// 2.  Write a for loop that will console.log() the numbers 0 to 999.

for(let i = 0; i <= 999; i++) {
	console.log(i);
}

// 3. The first part of the control statement is: let i = 0;
// 3. The second part of the control statement is: i < 100;
// 3.  The third part of the control statement is: i++;

// 4.  for loop in reverse
for(let i = 999; i >= 0; i--) {
	console.log(i);
}

// 5.  Write a for loop that uses interpolation to print a message to
// the console that includes the current value of i.

// The loop should run from 1 to 10.

for(let i = 1; i <=10; i++) {
	console.log('The value of i is: ' + i + ' of 10')
}

























// PART 1: Terms
//1. What is the difference between **interpolation** and **concatenation**? Give an example of each.
//              With an interpolation we can insert values of variables into our strings with the ${}. You must also contain 
//              string in back tick (`). For EX:
let name = "Steve";
console.log("Hello my name is  " + name + ", nice to meet you!");
console.log(`I heard ${name} is a real go getter`);

//              With a concatenation we can add strings together
//              For EX:
const greeting = "whats up";
const person1 = "Shadi ";
console.log(person1 + greeting);
console.log("hello " + "buddy");

//2. What does the acronym **DRY** stand for?Why should we pay attention to it? What programming tools have we learned to write **DRY** code?
//              DRY stands for DONT REPEAT YOURSELF. We should pay attention to it because is could save us much time 
//              in the future with long repetitive code. Functions and loops are tools used reduce repetition 

//3. What is the difference between declaring a variable and assigning a value to a variable?  What do we mean when we say "define" a variable?
//              declaring a variable would be declare that a variable exist. Once you declare it, you can the add a value to it. 

//4. When should we use `const` and when should we use `let`?
//              We should use const when we are declaring a variable that we do not want to be changed. We use let otherwise.

//5. Unix question: What is a "parent" directory?
//              Refers to the directory above another directory. The higher directory is called the parent directory, and the lower
//               directory is called a subdirectory

//6. Unix, again: If you're not sure about how to use a Unix command, how can you get more info without being connected to the internet?
//              man COMMAND

//7. More Unix: What is "tab completion" and why is it aweseome?
//              tab completion allows you to autofill in Bash and it is great because it saves us precious time



//## PART 2: Boolean expressions and operators
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

console.log(a <= b);
console.log(c >= d);           
console.log('Name' == 'Name'); 
console.log(a <= b <= c);  
console.log(a == a != d);
console.log(e === 'Kevin');
console.log(48 == '48');

//Part 3: While loops
//### 1. Infinite loop?
//          YES..condition is always true, thus it runs infinately 

//### 2. Infinite loop II
//          NO.. changing value end the loop..?

//### 3. Reading Code
//          js                   This allos us to not let code run
//          let letters = "A";   this is assigning a value to letters variable
//          let i = 0;           assigning a value to our initializer variable "i"

//          while (i < 20) {     if "i" (0) is less than 20 then run this block of code
//         	letters += "A";      Concatination
//      	i++;                 Add one to "i". This will run loop 20 times
//          }

//  console.log(letters);        console will show "A1, A2, A3, etc.. ""

let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

// I was wrong. Did not realize it was just adding letter "A" to the variable "letters". 


//Part 4: Loops!

//### 1. `for` loops
// Both for loops and while loops repeat code.  But what are the differences?  What are the similarities?
//              While loop- will repeate the code until the given condition is no longer true. 
//              For loop- will allow you to repeat a block of code a given amount of times. More compact & concise.


//### 2. Basic `for` loop
//Write a for loop that will `console.log()` the numbers 0 to 999.

for (let i = 0; i <= 999; i++){
    console.log(i);
};

// ### 3. The mechanics of a `for` loop 
// Here is an example `for` loop that prints a message 100 times:
// ```javascript
// for (let i = 0; i < 100; i++) {
// 	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }
// ```

// What are the three components of the **control statement**? Each component is separated by a semicolon `;`.
// Write your answers as comments in the file.  Say what each part does.

//              The first part of the control statement is: the initial condition (i=where we are starting in loop)
//              The second part of the control statement is: condition met
//              The third part of the control statement is: repeating expression


// ### 4. `for` loop in reverse
// Using a postfix operator `i--` instead of `i++`, write a *for* loop that iterates in *reverse*: `console.log()` a countdown from 999 to 0.

for (let i = 999; i >= 1; i--){
    console.log(i);
};

// ### 5. More counting
// Write a `for` loop that uses **interpolation** to print a message to the console that includes the current value of `i`.
// The loop should run from 1 to 10.


for (let i = 1;i < 10; i++){
    console.log(`The value of i is: ${i}`);
};



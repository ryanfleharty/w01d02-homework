//Terms Part: one
//1. The difference between interpolation and concatenation, 
//concatenation allows us to add strings together. Where as interpolation can be 
//used to insert values of variables into a string.

//2. Dry code stands for "Don't Repeat Yourself", it is ultimately used to make
//code easier to read and navigate. Tools to use dry code are, while and for 
//loops both are great tools to use.

//3. When you declare a variable, you are declaring intention to create the 
//thing, or you are declaring that it has already been created. Defining a 
//variable means that you are commanding your complier or interpreter to create 
//the thing.

//4. You cannot reassign const, and you can reassign variables with let. You 
//should use const as a default declaration. Meaning that the variable is safe 
//accidental changes. If you want the variable to be able to be changed use
//let.

//5. Refers to the directory above another directory. Every directory, except
//the root directory, is under another directory. The higher the directory is
//called the parent directory.

//6. If you are not sure about an unix command, in your command line type 
//the command that you want to use, then man. It will pull up the it will
//pull up the manual in your terminal.

//7.Tab completion is a very helpful feature in almost every command-line 
//environment. It can dramatically speed up typing commands. Just hit tab when 
//typing a command, option, or file name and the shell will automatically complete 
//what you were trying to say in the command line. 

//Boolean Part: two

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'kevin';

console.log("kevin");

//1. a < b; true
//2. c > d; true
//3. 'name' === 'name'
//4. a < b < c; true 
//5. a <= a < d; true 
//6. e === 'kevin'; true 
//7. 48 <= '48'

//while Loops Part: 3

//1. It is infinite, the reason being that it is true, 
//there is nothing in the code to suggest that it 
//will be false. It will contiune to loop.
//2. It is not infinite, it is false.

//let keyword is declaring the variable letters and is defining the string "A".
let letters = "A";
//let keyword is defining the i variable equal to 0.
let i = 0;
//the while loop is saying that i < 20 and the condition is true
//as long as the condition is true it will run indefinitely.
while (i < 20) {
//the variable letters is getting assigned the value of itself 
//and the string
    letters += "A";
//means that it will continue to add 1.
    i++;
}
//console.log will show the outcome in the chrome console 
//if done correctly.
console.log(letters);

//3.I think that the code will produce the string "A".
//3.The code produced multiple A's, I didn't take into account
//i < 20.

//Loops! Part: 4
//1. While and for loops are both re-evaluated each time the code 
//block finishes running. While loops will run over and over again if 
//the condition remains true. For loops usually run a fixed number
//of times, not continually.
//2.
for (var i =0; i<999; i++) {
    console.log(i)
}
//3. The first part of the control statement is: let i = 0; is executed one time 
//before the the execution of the code block. let is declaring the variable is 
//equal to 0. i < 100; defines the condition for executing the code block, it is saying that
//i is less than 100. i++ is executed everytime after the code block has been executed, it 
//is saying it will keep adding 1.
//4.
for (var i = 999; i > 0; i--) {
    console.log(i)
}
//5. 
for (let i = 1; i <= 10; i++) {
console.log('value of i is:')
}
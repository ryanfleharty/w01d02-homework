
/*
Part 1)
What is the difference between interpolation and concatenation? Give an example of each.
    concatination allows us to add two strings with a plus sign "string" + "string"  interpolation allows us to use a variable or template literal to insert a value into a string "string"+var+"string"
What does the acronym DRY stand for? Why should we pay attention to it?
    do not repeat
What programming tools have we learned to write DRY code?
    loops and functions
What is the difference between declaring a variable and assigning a value to a variable? What do we mean when we say "define" a variable?
    declaring a variable creates a container or binding. assigning a value puts that value into the container or wraps it in the created binding
When should we use const and when should we use let?
    const should be used if we do not intend to reassign a variable. let should be used when the variable may be reassigned
Unix question: What is a "parent" directory?
    a directory that stores other directories. a higher node on the tree.
Unix, again: If you're not sure about how to use a Unix command, how can you get more info without being connected to the internet?
    type man ls into the terminal
More Unix: What is "tab completion" and why is it aweseome?
    the terminal can predict the rest of your word and complete it if you hit tab.  it is awesome because it helps to avoid typos

Part 2)
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
part 3)
1.) this is an infinate loop because there is no condition to change the boolean value.  It will always evalute to true and keep running forever.
2.) there will be no output because the value in runProgram has been changed to false within the function.
*/
/*
//assign the string "A" to variable letters using let
let letters = "A";
//assign an index of 0 to i
let i = 0;
// set the condition that the following code will run while the index is less than 20
while (i < 21) {
//concatenate another string "A" to letters
	letters += "A";
//continue the code until the while condition is met
	i++;
}
//log 21 letter A to the console
console.log(letters);
*/
//Part 4
/*
for(let i = 0;i<=999;i++){
  console.log(i);
}
*/
/*
Write your answers as comments in the file. Say what each part does.

The first part of the control statement is:
  initial condition
The second part of the control statement is:
  ending condition
The third part of the control statement is:
  loop increments

for(let i = 999;i>=0;i--){
  console.log(i);
}
*/
for (let i = 1;i<=10;i++){
  console.log("The value of i is: "+i+" of 10")
}

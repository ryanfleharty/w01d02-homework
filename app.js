// Part 1: Terms

//1. Concatentation lets us add strings together or combine them
//console.log('Hello ' + 'Joseph');
// Interpolation differs because we can add defined variables into the strings
//const verb = 'sucks';
// console.log('this roller coaster ' + 'verb');

//2. DRY = Dont repeat yourself
// we should avoid repeating code because it can overlap each other and break
// for and while loops make code cleaner and avoid overlapping code ideas 

//3.declaring a variable means that a variable exists, you are not defining what value it holds
// assining a value to a variable gives it meaning 
//ie. var sentence = 'I like coding';

//4. const variables we dont want to redefine, something that stays constant
//let are varables we will allow to redefined. 

//5. I parent directory is a directory that is one level above the current file you are in
//ie. Users/joeluchini/Documents/football 
// Documents would be the parent of football, joeluchini would be the parent of Documents
// and Users would be the parent of joeluchini

//6. use the man command

//7. tab completion allows you to start typing a directory or file 
// and the command line will finish the rest of the typing for you
// ie. start typing sei-ju.. *hit tab* and autocompletes to sei-june-bugs/

//Part 2. Boolean expressions and operators

// 1. a < b;
// 2. c > d;
// 3.'Name' === 'Name';
// 4. a < b < c;
// 5. a === a < d;
// 6. e != 'Kevin';
// 7. 48 == '48';

//Part 3. While loops 

//1. I believe that this loop will be an infinite loop
// because it is missing a condition

//2. I believe that this loop will not be an infinite loop
//expected output is 'Do not run this loop' one time

//3. 
//letters is being assigned a value of "A"
let letters = "A";
//i is being assigned a value of 0
let i = 0;
//i (or 0) is less than 20, which will then continue down the code line.
while (i < 20) {
// I believe that this while loop will run until there are 20 A's in the console log
	letters += "A";
//adding 1 additional A until it it hits 20
	i++;
}

console.log(letters);

// The console.log returned what I had anticipated
// =>"AAAAAAAAAAAAAAAAAAAAA"

//Part 4: Loops
//1. For loops are essentially the same as while loops,
//they run through the code, and loop back until the condition is false.
//for loops are a bit more consise than while looops.

//2.
for(let i = 0; i <= 999; i++){
	console.log(i);
}
 

//3.
//The first part of the control statement is: initiliazation
//The second part of the control statement is: condition
//The third part of the control statement is: finalExpression

//Initialization: an expression or variable declarion. 
//condition: is to be evaluated before each loop. if true--> code executreed.
//final-expression: the expression to be evalated at the end of each loop

//4. 
for(let i = 999; i >= 0; i--){
	console.log(i);
}

//5
for(let i = 1; i <= 10; i++){
console.log('The value of i is: ' i + 'of 10');
}




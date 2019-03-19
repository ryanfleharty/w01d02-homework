//1. interpolation allows us to insert values of
//variables into strings to create an outcome
//example:
const name = 'Alexandra';
console.log('Hello my name is ' + name);

//concatentaion lets us "add" strings or strings within
//variables together 
console.log('hello' + 'Alexandra');

//2. DRY stands for "Don't Repeat Yourself"
//We shouldn't create repetitive code because 
//a. it gets really messy and big really fast (slows down rendering)
//b. when editing code that is hyper-repetitive, we can easily
//miss things and break the code

//3. declaring a variable means we are naming it and are going
//to be using it again. assigning a value to a variable is saying
//what a variable is equal to and comes after the equal sign.

//4. we should use const when we are defining a variable that 
//we don't want to change and shouldn't change (the code won't
//allow it to). we should use let when we want to create a
//variable that is allowed to be redefined later in the code.

//5. a parent directory is a folder (directory) that holds
//other folders or content

//6. you can use man (command) and the manual will pop up and
//tell you how to use the command/what it does

//7. tab completion is awesome because it allows you to
//navigate really quicky through the terminal
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a<b);
console.log(c>d);
console.log('Name' === 'Name');
console.log(a<b<c);
console.log(a + a < d);
console.log(e == 'Kevin');
console.log(48 == '48');

//pt 3
//1. (grayed out so it won't run by mistake)
//while (true) {
	//console.log('Do not run this loop');
//}
//it will be infinite, because a while loop will continue to
//run until the expression's condition becomes false...but if
//it's by default true, it will run forever

//2. 
//const runProgram = true
//while (runProgram) {
	// console.log('Do not run this loop');
	// runProgram = false;
//}
//it'll be inifinte because the const is defined as true 
//and because it's constant, we can't change it's state

//3.

let letters = "A";
let i = 0;

while (i < 20){
	letters += "A";
	i++;
}
console.log(letters);

//I think that my first line of response will be just "A"
//and then an A will be added to the line until the 20th line
//and then it'll stop, but the 20th will have
//AAAAAAAAAAAAAAAAAAAA

//SO, I was slightly wrong. intstead of printing all the loops
//until it reaches 20 A's, it only printed one line of 20 A's

//PART 4
//1. for loops: used when we know how many times it needs to run.
//while loops: used for when the number of times it needs is
//unknown or random.

for(let i = 0; i <= 999; i++){
	console.log(i);
}

//3. 
// the first part of the control statement is: initial condition
// the second part of the control statement is: the condition
//to be met, it will be true or false
// the third part of the control statement is: the repeating
//expression

for(let i = 999; i >= 0; i--){
	console.log(i);
}

for(let i = 0; i <=10; i++){
	console.log('The value of i is: ' + i + ' of 10');
}



























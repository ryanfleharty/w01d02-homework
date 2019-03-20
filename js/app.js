//1. Concatenation allows us to combine strings. Concatenation occurs in this example, console.log("Hello " + "Dave"), which returns "Hello Dave". Interpolation allows us to insert variables in our strings. Interpolation occurs in this example, console.log("Hello " + name), provided that the variable name has been declared and defined.
//2. DRY stands for Do Not Repeat Your Code. This is like the KISS rule for journalists: Keep It Simple Stupid. DRY is applicable to all code. I've used it in CSS, HTML, and JS so far. Oh, it's an important rule because it keeps your code lean and clean.
//3. We declare a variable when we write something like var name or let name. (The variable in this example is name.) We define that value with the assignment operator, =, as in, var name = Dave.
//4. Use const to declare a variable that will not be changed. Use let to declare a variable that might be changed later in the code.
//5. A parent directory is a folder that contains files and folders. It's a relative term. The folders it contains are called child directories.
//6. First you type man and then you type the command you want to know more about.
//7. Tab completion is awesome because it automatically completes the names of files and folders

//PART II

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a + a < d);
console.log(e === 'Kevin');
console.log(48 == '48');


//PART III
//1. Here's why I think this is an infinite loop. (Aside from the warnings not to run the code.) The code is going to return true. There's not reason for it not too, right?
//2, Here's my guess: this is not an infinite loop. Why not? runProgram is a constant variable that is defined as true. The while loop won't run because runProgram is defined as false within it. So... no expected output.
//3. Here's my guess: every time that i increases, an extra A appears in the string.


let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);


//Yep, that's exactly what happened: AAAAAAAAAAAAAAAAAAAAA
//1. We use for loops when we know how many times we're going through an array. We use a while loop when we don't know how many times we'll cycle through an array. Both for and while loops have conditions, but the for loop has an initialization and finalExpression, while the while loop does not.


for(i = 1; i <= 999; i++) {
	console.log("The number is " + i);
}


//3. The three components of the control statement are: (let i = 0; i < 100; i++). The first component declares and defines i. The second part establishes the number of times the loop will occur. The third part causes the value to increase incrementally by 1.


for(i = 999; i >= 0; i--) {
	console.log("The number is " + i);
}

for(i = 1; i <= 10; i++) {
	console.log("The value of i is: " + i + " of 10.");
}

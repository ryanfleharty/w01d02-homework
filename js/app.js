//Part 1: Terms
// 1. The difference between interpolation and concatenation is that concatenation is used to combine to strings 
// and interpolation allows you to insert values of variables into strings.

// 2. DRY stands for "Don't Repeat Yourself," and it's important because it helps us clean up our code so that it
// runs faster/smoother and is easier for other programmers to read and edit. The tools we have learned to create
// DRY code are while and for loops.

// 3. The difference between declaring a variable and assigning a value to a variable is when you declare a 
// variable, you are saying that you are going to use it to hold a value (ex. let dogName). Assigning a value is 
// when you actually give the variable a value (ex. dogName = "Dubs").

// 4. We should use let when we want to be able to redefine a variable. We should use const when we want a variable 
// to stay constant, or unable to be redefined.

// 5. A parent directory is a folder with contents within it. 

// 6. To find out how to use a Unix command without the internet, you can use the man + the command to pull up the 
// manual page for that command. 

// 7. Tab completion is the bash and text editors' ability to predict what you are trying to write after you type 
// a few characters and hit tab. It speeds things up a bit, but mostly helps prevent spelling errors.


const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a < a < d);
console.log(e === 'Kevin');
console.log(48 !== '48');



//Part 3: While loops
// 1. Yes, this will run an infinite loop because there is nothing to compare. It will always return a true value 
// because it's only reading itself.

//2. Yes, this will run an infinite loop because runProgram is set to true as a const and cannot be redefined 
// later in the code.

// 3. Reading Code

// declares letters as a variable, defines letters to equal "A"
let letters = "A";
// tells computer to start at 0
let i = 0;
// tells computer to operate the bracketed code 21 times (0-20)
while (i < 20) {
    // letters = letters + "A"
    letters += "A";
    // tells computer to go to next number until we reach 20
	i++;
}
// print the final value for letters
console.log(letters);

// It will print 21 "A"s in a row AAAAAAAAAAAAAAAAAAAAA
// Yes, my conclusion was correct.

// Part 4: Loops!
// 1. Both for and while loops clean up repetitive code (DRY principle).
// while loops are used when the number of times to execute the code is unknown/random. while loops tend to be 
// longer and can be a little weird because the variable is defined outside of the bracketed code, so it can 
// possibly be confused in a later function.
// for loops are used when you know the number of times to execute (ex. comparing each value of an array). 
// for loops are  cleaner because the expressions that take up several lines in a while loop are put into one line.

// 2.
for (i = 0; i <= 999; i++) {
    //.console.log(i);
}


// 3.
// The first part of the control statement is: let i = 0. It tells the computer to start at 0.
// The second part of the control statement is: i < 100. It tells the computer that it should execute the bracketed 
// code 101 times (0-100).
// The third part of the control statement is: i++. It tells the computer to move on to the next number after it 
// completes the code (ie. prints 'Without you, today\'s emotions are the scurf of yesterday\'s').


// 4. 
for (i = 999; i >= 0; i--) {
    console.log(i);
}

// 5.
for (i = 1; i <= 10; i++) {
    console.log('The value of i is: ' + i + ' of 10');
}
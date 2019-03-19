//=======PART 1: Terms=======

//1. Concatenation works only with string types, whereas interpolation can be used to insert
//other data types in the string

//2. Don't Repeat Yourself; i.e. Functionate All The Things.

//3. Declaring a variable allocates memory for it and assigns it an initial value. Assigning a value
//merely changes the value of it.

//4. Const should be used when we do not ever want to redefine the variable. Let can
//be used for all other cases, when we will be redefining it.

//5. Parent directory is the one in which the current directory is located.

//6. Use the man command.

//7. Tab completion (i.e. "DOSKEY") is a shell feature in which pressing the tab key autocompletes
//using files and directories in the current path.

//=======PART 2: Boolean Expressions and Operators=======


const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log("The following should all evaluate to true");
console.log(a != b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a === a != d);
console.log(e === 'Kevin');
console.log(48 == '48');




//=======PART 3: While Loops=======

//1. Yes, it's an infinite loop, because 'true' is always true, and there is nothing within
//the loop intended to be used to break out of it at some point.

//2. No, because the condition is changed to false as soon as the loop is run for the first
//time - so it only runs exactly once.

//3. 

console.log("The following string should be a series of 10 A's");

//Declare variable letters as string, initial value "A"
let letters = "A";
//Declare variable i as int, initial value 0
let i = 0;

//Initiate a while loop which exits when i reaches 20
while (i < 20) {
	//Add another A to the end of the letters string:
	letters += "A";
	//Add one to i:
	i++;
}
//Output the final value of the letters string (will be a series of 20 A's):
console.log(letters);


//After running this code, it gives the expected result.



//=======PART 4: For Loops=======

//1. for loops are intended for specific applications in which the number of iterations
//is known beforehand. while loops are intended for applications in which the number
//of iterations is determined dynamically within the loop.

//2.

console.log("Numbers from 0 to 999:");
//The following loop logs the numbers 0 to 999:
for (let i = 0; i <= 999; i++)
{
	console.log(i);
}


//3. The control statement.
//First parameter: Declaration or initialization of counter variable.
//Second parameter: Condition, the fulfilment of which will cause the loop to terminate.
//Third parameter: Value to increment counter variable by each loop.

//4.

console.log("Numbers from 999 to 0:");
//The following loop logs the numbers 999 to 0 in reverse:
for (let i = 999; i >= 0; i--)
{
	console.log(i);
}


//5.

console.log("Loop from 1 to 10:");
//The following loop goes from 1 to 10 and prints the current value each time around:
for (let i = 1; i <= 10; i++)
{
	console.log(`The value of i is: ${i} of 10`);
}



//=======HUNGRY FOR MORE=======
//Well, I'll see if I get to this later.
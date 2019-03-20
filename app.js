//Part 1: Terms
//1. Concatenation allows you to add strings together.
//	Interpolation allows you to insert the value of variables into strings.
//2. DRY = Don't Repeat Yourself. 
//	It's important to remember in order to avoid redundancies, and other issues that can make the code needleslly complicated (and difficult for others to follow). 
//	You can stay DRY by using if/for/while loops, among other ways.
//3. 
//4. Use let for variables that we want redefined, use const for variables we don't want redefined.
//5. Parent directory = location housing the current environment/content.
//6. 
//7. Using tab to auto-complete. It prevents typos.

//Part 2: Boolean expressions and operators
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
//1. <
console.log(a < b);
//2. >
console.log(c > d);
//3. ===
console.log('name' === 'name');
//4. < <
console.log(a < b < c);
//5. === !=
console.log(a === a != d);
//6. ===
console.log(e === 'Kevin');
//7. ==
console.log(48 == '48');

//Part 3: While loops
//1. Yes, it is an infinite loop, because it doesn't specify any conditions that stop the loop function.
//2. Another infinite loop. 
//3. 
//defines the 'letters' variable.
let letters = "A";
//defines the 'i' variable.
let i = 0;
//creates the condition of the while loop, i.e this loop will run as long as the variable 'i' is less than 20.
while (i < 20) {
	//defines what exactly is going to happen in the function, in this case that the next letter will be selected.
	letters += "A";
	//runs the loop again (2nd time, 2nd letter/B.)
	i++;
}
//prints letter A-T.
console.log(letters);
//I was wrong. += threw me off so I thought this would produce a progressive alphabet result (ABCDEFGHIJKLMNOPQRST).

//Part 4: Loops!
//1. for loops are more compact/concise than while loops. They both are set up in a similar way, in that they both include the conditions by which the loop is stopped when met.
//2.
for (let i = 0; i <= 999; i++) {
	console.log(i);
} 
//3. First part: initial condition, it provides the starting point for the loop.
//		Second part: expression to be met, it determines how many times the loop will run by dictating the stopping point.
//		Third part: repeating expression, which defines what is done to change the variable after each running of the loop.
//4. 
for (let i = 999; i >= 0; i--) {
	console.log(i);
}
//5. 
for (let i = 1; i <= 10; i++) {
	console.log(`The value of i is: ${i} out of 10`);
}
















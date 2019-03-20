/*1. the difference between interpolation and concatenation, is that interpolation inserts values ofvariable in the strings.
concatenation, combines two or more strings to creat a longer one.*/
/*interpolation ex*/ const adjective = 'cold';
                  console.log(`Its really ${adjective} today`);
/*concatenation ex*/ const greeting = 'im hungry';
                  const firstguy = 'davis';
                  console.log('greeting' + 'firstguy');
                  console.log('me too' + 'truong');
/*2. DRY stands for "dont repeat yourself", repetition of the same line will take up more space and
will need more maintanance to the software and is wasting resources, and also is not efficient. One way to write a DRY code is through loops*/
/*3.declaring is naming a vaiable, assigning is giving the variable a value.
defining a vaiable is putting a value to the variable.
/*4.const is use when you dont want the value to change and let is used when you want the value to change.
/*5. A parent directory refers to the directory/folder above the current dictory/folder*/
/*6.Apply man before any command.
/*7. the tab completion is used to autocomplete when typing out commands. This is so useful because it
helps you enter commands much more efficiently, making it quicker and easier overall.*/
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a === a != d);
console.log(e === 'Kevin');
console.log(48 == '48');

//infinite loop
//it is an infinite loop because theres nothing to tell the condition to stop.

//infinite loop 2
// Yes it is also an infinite loop because, the variable that is being used in the condition is a const and cant be changed.

let letters = "A"; //declaring letter as variable and assigning a string "A"
let i = 0; //declaring variable as i and assigning value of integer "0"

while (i < 20) { //while i is less than 20
	letters += "A";// A gets appended to letters
	i++;// i increments by one
}
console.log(letters);
//this loop will stop at 21 "A's"
//outcome was expected because it started at 0 and added 1 each time until condition was met.

// both for and while loops must have a starting point, condition, and a incrementer.
//the difference is a while loop can use a boolean. for loops are also compact and structured differently

//the starting point: gives value to the variable
//condition: tells when the loop to stop
//incrementer: progressing the loops

for (let n = 999; n > 0; n--) {
  console.log(n);
}

for (let f = 1; f <= 10; f++) {
  console.log(`The value of i is: ${f}  of 10`);
}

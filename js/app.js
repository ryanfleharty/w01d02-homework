//***PART 1 TERMS***

// 1. Concatenation vs Interpolation

// Concatenation lets us add strings together
// example
console.log('JNCO jeans ' + 'never went out of style');

// Interpolation lets us insert values of variables in to our string
const team = 'Green Bay Packers';
console.log('The best football team is the' + team);
console.log(`The best team is the ${team}`);

/* 2. DRY 
DRY stands for "do not repeat yourself". 
DRY code is important for readability and also to minimize the 
amount of processing power it requires to load a page. 
Loops help us not repeat ourselves in code. */

/* 3. Declaring vs Assigning a Variable
Declaring a variable is when a value is first given a value 
using var/let/const ex: let x = "tomato". 
Assigning a variable is when a new value is assigned to a 
previously declared variable. ex: x = "brick". */

/* 4. Const vs Let
Const is used when the value given to the variable should and 
cannot be changed. 
Let is used when you want to be able to reassign the value of 
a variable. */

/* 5. A 'parent directory' is the directory that contains the subject 
file or directory. */

/* 6. You can find out more info locally about a Unix commmand
by using the command man <command>. */

/* 7. "tab completion" allows you to type the first part of a word
in command line and it will complete the word. It is awesome because
you can type less and move around the terminal faster. */


// ***PART 2 BOOLEAN EXPRESSIONS***

/*
1. a > b
2. c > d
3. 'Name' === 'Name
4. a < b < c
5. a === a < c
6. e === 'Kevin'
7. 48 == '48'
*/

// ***PART 3 WHILE LOOPS***

/*
1. Infinite Loop - The condition within the while loop "true"
   will always remain true in this case, therefore it will 
   not stop running. 

2. The second loop would be infinite, however since within the loop 
   it tries to re-assign a const variable, it will result in an error 
   and not run forever. 
   
3. Without running the loop, I would expect that the output for the 
   first iteration would be the string "A". The second iteration would
   result in the string "AA". The third iteration would result in the 
   string "AAA", and so on until the last iteration produced as string 
   of 20 "A"s. when the variable letters is logged to the console, it will
   be a string of 20 "A"s. 

   let letters = "A";
   // this line assigns the string "A" to the variable letters
   let i = 0;
   // this line assigns the value 0 to the variable i

   while (i < 20) {
   // this line sets up the while loop with the stopping condition i < 20
      letters += "A";
   // this line adds another "A" to the variable letters on each iteration
      i++;
   // this line adds 1 to i, making the loop run 20 times
   }

   console.log(letters);
   // this will log the variable letters to the console. The loop is
   above the console.log, therefore it will log the value of letters that
   is modified by the loop, or 20 "A"s. 

  I ran the code and the console showed what I expected to see. :) 
*/

// ***PART 4: LOOPS***

/* 
1. for loops vs while loops

WHILE LOOPS: These are best used when you are not sure how many times 
a loop will need to be run. In while loops the variable is defined prior
to the loop in the global scope. While loops are similar to For loops 
in that they repeat the loop until a stopping condition is met. 

FOR LOOPS: For loops are best used when the number of iterations is
known. For loops generally have their variables defined within the loop 
itself. For loops consist of an iterator variable, initialization,
stopping condition, and an iteration statement for the updated iterator
value for the next time around. Inside the loop is the block of code to 
be run on each iteration. Both for and while loops iterate over something
until a stopping condition is met. 
*/

// 2. for loop that logs numbers 0 to 999
for (let i = 0; i < 1000; i++){
    console.log(i);
};

/* 3. Mechanics of a for loop: 
   The for loop control statement includes 3 parts: 
   1) The first part of the control statement is the initialization. 
      This part shows where the loop is supposed to start. 
   2) The second part is the stopping condition. This part states the 
      condition that when met, will stop the loop from running. 
   3) The third part is the final expression or what will be done to 
      the initialization variable for the next iteration of the loop.
*/

// 4. for loop in reverse, counting from 999 to 0
for (let i = 999; i >= 0; i--){
    console.log(i);
};

// 5. More counting! For loop using interpolation counting from 1 to 10
for (let i = 1; i <= 10; i++){
    console.log(`The value of i is: ${i} of 10`)
}; 

// ***HUNGRY FOR MORE***


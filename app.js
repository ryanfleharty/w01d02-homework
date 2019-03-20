
// 1. The difference between concatentation and interpolation... Concatenation lets us add strings
//together while interpolation lets us add values of variables to those strings

// 2. DRY stands for Dont repeat yourself and it helps keep your code orginized and clean. 
//we can use for and while loops to do so. 

// 3. Defining a variable is assinging that variable a value while declaring a variable is
//to call on that variable in order to activate its use. ie(console.log)

// 4. Use 'let' when you want to change the variable and 'const' when you can not change the variable 

// 5. A  parent directory holds other operating directories, such as your desktop. 

// 6. Use the 'man '' ' command in your terminal. 

// 7. A tab completion is using the tab while talking to the command line to finish the command, file or directory name. 

//PART 2


 'a'<'b';
 'c'<'d';
 'Name'==='Name';
 'a'<'b'<'c';
 'a'==='a'!='d';
 'e' = 'kevin';
  48 != '48';

 console.log();

//PART 3

// 1. This while loop will be infinite because it has no 'if else' and is already stated true. 

// 2. This while loop will not be infinite because its veriable is constant and can not be altered. 
//'runProgram' can not be changed to false.


//letters variable = A
let letters = "A";
//variable i is defining the index and = 0 
let i = 0;

while (i < 20) {
	// += compound normnally means x+x=y ... A+A=A ?
	letters += "A";
	// index plus 1
	i++;
}
// calling the amount of letters
console.log(letters); 

// PART 4

// 1. For loops are used when you know how many times it will loop.
	//while loops are used when you know the outcome but not how many times it will loop

for(let i = 0; i <= 999; i++){
	console.log('number: ' + i);
}

//for ([initialExpression]; [condition]; [executedExpression])
// the first initializes 1 or more loops.
// the second condition evalutes to true or false.
// the last excutes the expression and determines whether to loop back.
for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}


for (let i = 999; i>0; i--){
	console.log('countDown: ' - i);
}

for(i=0; i<=10; i++){
	console.log('The value of i is ' + i + ' of' + ' 10');
}




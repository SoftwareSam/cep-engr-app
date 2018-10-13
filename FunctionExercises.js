ECMAScript is a specification (defining standards)
JavaScript is a prog language that conforms to this specification

Create index.html
! tab to create basic HTML boilerplate(to host Java code)


Primitives / Value Types

String 			String Literal
Number			Number Literal
Boolean			Boolean Literal 
undefined		default if not initialised
null			used to explicitly clear the variable value

Reference Types

Object			A COLLECTION OF KEY VALUE PAIRS
Array
Function		is a set of statements that either performs a task or calculates and returns a value


let person = {};  <---- Object Literal


let selectedColors = [];	<---- Array Literal / empty array

let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors.length);


function greet(name) {   			<--- name is a Parameter of the greet function
  console.log("Hello " + name);			 Parameter is created at the time of declaration	
}
greet('John');					<---- John is an Argument to the greet function 
									  Argument is the actual value supplied to the Parameter

// Performing a task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}
greet("John", "Smith");

//Calculates a value
function square(number) {
  return number * number;
}
console.log(square(3));


OPERATORS

Arithmetic	<---	console.log(x + y);
Assignment	<---	x += 5;
Comparison	<---	Boolean, Ternary, Equality
Logical		<--- 	AND (&&)	OR (||)		NOT (!)
Bitwise		<---	Bitwise OR operator (|) we can add permissions.
					AND operator (&) check to see if we have a given permission.
					
					
console.log(x % y); 	<-- Remainder of division
console.log(x ** y);	<-- Exponentiation

// Increment (++)
console.log(x++);

// Decrement (--)
console.log(--x);

// Strict Equality (Type + Value) ensures that both values have the same type and value.

console.log(1 === 1);
console.log(1 === "1");

//Loose Equality 
// operator doesn't care if the types don't match. It will convert the type of what we have on the right side to match what we have on the left side. Will only check if the values are equal.

console.log(1 == 1);
console.log(1 == "1");
console.log(true == 1);


TERNARY OPERATORS HOLY SHIT
// If a customer has more than 100 points they are a 'gold' customer, otherwise they are a silver customer.

let points = 100;
let type = points >= 100 ? "gold" : "silver";

console.log(type);

// Logical AND (&&)
// Returns TRUE is both operands are TRUE
// console.log(true && false);

//Logical OR (||)
//Returns TRUE if one of the operands is TRUE
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible", eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);

// Falsy (false)
// undefined
// null
// 0
// ''
// NaN  (not a number)

// Anything not Falsy is Truthy

// Short-circuiting --> false || 1 || 2
// evaluation starts on the left.
// as soon as an Operand is found that is Truthy, that Operand is returned. ALL OTHERS ARE IGNORED

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);
// this technique lets us define default values


// 1 = 00000001
// 2 = 00000010
// 3 = 00000011  OR
// R = 00000000  AND

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND


!!!!!!!!CONDITIONAL STATEMENTS!!!!!!!!!

if . . . else
switch . . . case

let hour = 16;

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening!");
}

let role;

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown Role");
}

if (role === "guest") console.log("Guest");
else if (role === "moderator") console.log("Moderator");
else console.log("Unknown User");

LOOPS

For				Loop Variable declared INternally
While			Loop variable declared EXternally
Do . . .while	Always executed at least once
For . . .in		Iterate over the properties of an object
For . . .of		Iterate over elements/items in array

// Print 'Hello World' 5 times
for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}

// Print the odd numbers between 1 and 5
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
} 
// if the remainder of ['i' divided by 2] is NOT 0, print 'i'

// While version
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// Do while 
let i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

// for-in
const person = {
  name: "Mosh",
  age: 30
};

for (let key in person) {
  console.log(key, person[key]);
}

// name Mosh
// age 30

// There are two ways to access object properties

// Dot Notation
// person.name;

// Bracket Notation - if we don't know the value at runtime
// person["name"];

const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index, colors[index]);
}
0 red
1 green
2 blue

// for-of
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}


BREAK - jump out of a loop
CONTINUE - jump to next iteration of loop

let i = 0;
while (i <= 10) {
  // if (i === 5) break; 	<---- stop for loop at 5
  if (i % 2 === 0) {		<---
    i++;
    continue;
  }

  console.log(i);
  i++;
}




function largest(firstNumber, secondNumber) {
  if (firstNumber - secondNumber > 0) {
    return firstNumber;
  } else return secondNumber;
}
console.log(largest(16, 2));
===============================

let number = max(1, 3);
console.log(number);
// one way
function max(a, b) {
  if (a > b) return a;
  return b;
}
// another way
function max(a, b) {
  return a > b ? a : b;
}

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(45);
console.log(output);

function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 !== 0) return "Fizz";
  if (input % 5 === 0 && input % 3 !== 0) return "Buzz";
  if (input % 3 === 0 && input % 5 === 0) return "Fizzbuzz";
  if (input % 3 !== 0 && input % 5 !== 0) return input;
  return "Not a number"; <-- wrong
}

/////////////////////////////

const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}





const output = checkSpeed(Math.floor(180));
console.log(output);

function checkSpeed(speed) {
  if (speed <= 70) return "OK";
  if (speed > 70 && speed <= 75) return "Point: 1";
  if (speed > 75 && speed <= 80) return "Point: 2";
  if (speed > 80 && speed <= 85) return "Point: 3";
  if (speed > 85 && speed <= 90) return "Point: 4";
  if (speed > 90 && speed <= 95) return "Point: 5";
  if (speed > 95 && speed <= 100) return "Point: 6";
  if (speed > 100 && speed <= 105) return "Point: 7";
  if (speed > 105 && speed <= 110) return "Point: 8";
  if (speed > 110 && speed <= 115) return "Point: 9";
  if (speed > 115 && speed <= 120) return "Point: 10";
  if (speed > 120 && speed <= 125) return "Point: 11";
  if (speed > 125 && speed <= 130) return "Point: 12";
  return "License Suspended";
}

NEVER USE "MAGIC NUMBERS"
ALWAYS USE CONSTANTS WHERE POSSIBLE


checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12)
    console.log('License suspended');
  else
    console.log('Points', points);
  
}

showNumbers(10);

function showNumbers(limit) {
const input = limit;
  for (let i = 0; i <= input; i++) {
    if (i % 2 == 0)
      console.log(i, "EVEN");
    else
      console.log(i, "ODD");
  } 
}

function showNumbers(limit) {
   for (let i = 0; i <= limit; i++) {
     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
     console.log(i, message);
   }
}


const array = [1, 3, '', 5, 0, null, undefined];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  const arrayItem = true;
     
  for (let arrayItem of array)
    if (arrayItem) count++;
    console.log(count);

function countTruthy(array) {  <----- don't have to declare value
  let count = 0;
  for (let value of array)
    if (value) count++;
    console.log(count);




const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let index in movie){
      if ((typeof movie[index]) == 'string'){
        console.log(index, movie[index]);
      }
    }
}


console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum(limit) {
  let total = 0;
  
    for (let i = 0; i <= limit; i++) 
      if ((i % 3 === 0) || (i % 5 === 0)) 
        total += i;
    
    return total;
}

MY WAY
function calculateGrade(marks) {
  let grade;
  let count = 0;
  let totalScore = 0;
  let averageScore = 0;
  
  for (let singleScore of marks) {
    totalScore += singleScore;
    count++;
  }
  averageScore = totalScore / count;
  
  if (averageScore >= 90) return 'A';
  if (averageScore >= 80) return 'B';
  if (averageScore >= 70) return 'C';
  if (averageScore >= 60) return 'D';
  else return 'F';
}

HIS WAY [create separate function to calculate average]
const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);  
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array)
    sum += value;
  return sum / array.length; 
}


// Print a star on each line, number = lines.
showStars(10);

function showStars(rows) {
  for (let row = 1; row <= rows; row++){
    let pattern = '';
    for (let i = 0; i < row; i++)
      pattern += '*';
    console.log(pattern);
  }
}

SHOW PRIME NUMBERS UP TO INPUT VALUE
showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

Simplified version
showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) 
    if (number % factor === 0) 
      return false;
  
  return true;
}


// Object-oriented Programming (OOP)
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log('draw');
  }
};

circle.draw();  // Method



// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);


4.2
// Camel Case - oneTwoThree - Factory
// Pascal Notation - OneTwoThree - Constructor

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}
const circle1 = createCircle(1);
console.log(circle1);

4.3
// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  } 
}
const circle = new Circle(1);

4.4
const circle = {
  radius: 1
};

circle.color = 'yellow';
circle.draw = function() {}

delete circle.color;

console.log(circle);


4.5
let x = {};
// let x = new Object();

new String(); // '', "", `` instead
new Boolean(); // true, false
new Number(); // 1, 2, 3

// Every object has a constructor property, and that references a function that was used to create that object.

4.6
// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  } 
}
const another = new Circle(1);
//
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
  console.log('draw');
}
`);
const circle = new Circle(1);


// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  } 
}

Circle.call({}, 1)
//this operator will internally create an empty object and pass that as the first argument to the call method. 
// 'this.' will reference '{}'
Circle.apply({}, [1, 2, 3]); //for arrays

const another = new Circle(1);


4.7
let x = { value: 10 };
let y = x;

x.value = 20;
// object is not stored in the variable, is referenced by x
// object is referenced by x, it is not the value of x
// Primitives are copied by their value
// Objects are copied by their reference

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj);


4.8
const circle = {
    radius: 1,
    draw() {
      console.log('draw');
    }
};

for (let key in circle)
  console.log(key, circle[key]);
// key shows the properties of circle
// circle[key] shows the values of the properties

for (let key of Object.keys(circle))
    console.log(key);
// Object.keys() creates array, returns all the keys in object

for (let key of Object.entries(circle))
    console.log(key);
// returns each key value pair as an array

if ('radius' in circle) console.log('yes');
// to see if a given property or method exists

4.9
// CLONE AN OBJECT
const circle = {
    radius: 1,
    draw() {
      console.log('draw');
    }
};

const another = {};
for (let key in circle)
    another[key] = circle[key];
// old clunky way that you shouldn't do

const another = Object.assign({}, circle);
// allows you to add properties to the copy

const another = { ...circle };
// Spread operator, carbon copy

console.log(another);

4.11

// Template ``  Template literal new to ES6

// String primitive     typeof message = "string"
const message = 
'This is my\n' +
'\'first\' message';

const name = 'John';
const another = 
`Hi ${name} ${2 + 3},

Thank you for joining my mailing list.

Regards,
Sam`;


4.15
// create address object with 3 properties:
//street
//city
//zipCode
//function showAddress(address) to display properties & value
const address = {
    street: 'Brookland Hill',
    city: 'London',
    zipCode: 'NW11',
};
function showAddress(address){
    for (let key in address)
        console.log(key, address[key])       
}
showAddress(address);


4.16
// initialize object using Factory and Constructor
let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c',
};
// simplified -- let address = new Address('a', 'b', 'c')
// 
console.log(address);


// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

4.17
// comparing the properties of two objects
let address1 = new Address('a', 'b', 'c')
let address2 = new Address('a', 'b', 'c')

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
//if properties of object are equal return true
function areEqual(address1, address2) {
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode;
}
//if both properties are referencing the same object
function areSame(address1, address2) {
    return address1 === address2;
}

4.18
// Blog Post Object
// use the object literal syntax to create and initialize a blog post.

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author:'a', body:'b'},
        {author:'c', body:'d'},
    ],
    isLive: true,       
};
4.19
// make function for above data
let post = new Post('a', 'b', 'c');   //
console.log(post);                    //

// Constructor Function
function Post(title, body, author) { //views, comments, isLive have default values
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;         // set to zero before launching
    this.comments = [];    // set to empty array
    this.isLive = false;   // set by default, cuz it ain't live
};
4.20
// price range object properties

let priceRanges = [
    {labels: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {labels: '$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {labels: '$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
];

let restaurants = [
    { averagePerPerson: 5}
]

// ARRAYS!
// Adding, Finding, Removing elements
// Splitting & Combining Arrays

//Adding Elements - End, Beginning, Middle of array
const numbers = [3, 4];     // constant but you can add or remove elements

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle                           // Splice has 3 parameters
numbers.splice(2, 0, 'a', 'b');     // Start Position, items to delete, items to insert

console.log(numbers);     

//Finding Elements (Primitives)
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1, 2));     //if it doesn't exist output is -1 (look for, start from)
console.log(numbers.lastIndexOf(1));    //last index of element                                
                                    
console.log(numbers.indexOf(1) !== -1); //crude way of checking to see if an element exists
console.log(numbers.includes(1));       // neater way of the above


// Finding Elements (Reference Types)

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

// let's find out if there is a course named 'a' in this array
// array find()
const course = courses.find(function(course) {
    return course.name === 'a'
});
console.log(course);

// array findIndex()
const course = courses.findIndex(function(course) {
    return course.name === 'a'; //if index doesn't exist result = 0
});
console.log(course);

// ARROW NOTATION
const course = courses.find(course => course.name === 'a');
console.log(course);


// REMOVING ELEMENTS FROM ARRAY
const numbers = [1, 2, 3, 4]

// End
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Begining
const first = numbers.shift();
console.log(first);

// Middle
numbers.splice(2, 1)  // splice(position, number of elements)
console.log(numbers);



// EMPTYING AN ARRAY
let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
// Works if no other references to array exists
numbers = [];

// Solution 2 -- Mosh's preference
numbers.length = 0;

// Solution 3 -- a bit noisy
numbers.splice(0, numbers.length);

// Solution 4 -- very unorthodox and system intensive way, don't do it.
while (numbers.length > 0)
    numbers.pop();

console.log(numbers);
console.log(another);


// COMBINING AND SLICING ARRAY 		
const first = [1, 2, 3];
const second = [4, 5, 6];

// Concatenate to combine two arrays
const combined = first.concat(second);

// use to slice. If you have objects in array, the references will be copied, not the objects themselves.
// if you call the slice method without any argument, this will return a copy of the original array.
const slice = combined.slice();

console.log(combined);
console.log(slice);

// if array has object
const first = [{ id: 1 }];  // reference type so copied by reference
const second = [4, 5, 6];

const combined = first.concat(second);

console.log(combined); 
// Output = [{…}, 4, 5, 6]


// SPREAD OPERATOR IN ES6, best way to combine arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, ...second];

//to copy array into a variable
const copy = [...combined];

console.log(copy);


// ITERATING AN ARRAY
const numbers = [1, 2, 3];

// for of loop
for (let number of numbers)
    console.log(number);

// forEach method    
numbers.forEach(function(number) {
    console.log(number);
});

// most efficient way to iterate an array 
numbers.forEach(number => console.log(number));


// JOINING ARRAYS

// To join characters array contents into a single string.
// .join() lets you add separators
const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);

// To remove strings or characters
const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

// above method used in below
const combined = parts.join('-');
console.log(combined);


// SORTING ARRAYS

// sort() converts elements in array to string, then sorts
const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// sort 2 objects
// With Objects
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
];

courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
   
    // convert text to lower case to maintain relative ASCII values
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
        
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;       
});
console.log(courses);


//	TESTING THE ELEMENTS OF AN ARRAY

// check if numbers are positive

// every() checks if every element matches given criteria
// some() checks if at least one element matches given criteria

// .every()
const numbers = [1, -1, 2, 3];

const allPositive = numbers.every(function(value)   {
   return value >= 0; 
});

console.log(allPositive);


// .some()
const numbers = [1, -1, 2, 3];

const atLeastOnePositive = numbers.some(function(value)   {
   return value >= 0; 
});

console.log(atLeastOnePositive);

// FILTERING AN ARRAY

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function(value) {
    return value >= 0;
});
console.log(filtered);

//changed to simpler arrow function, can change 'value' to 'n' for brevity
const filtered = numbers.filter(value => value >= 0);
console.log(filtered);


// MAP AN ARRAY
// .map(value, index, array position)
// map each element in an array to something else, like strings and objects
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => {
    const obj = { value: n };
    return obj;
});
console.log(items);

// Chaining Methods
const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }) )
    .filter(obj => obj.value > 1) // return values greater than 1
    .map(obj => obj.value); // 

console.log(items);

// filter & map return an array, they don't modify the original array
// this makes them chainable 


// REDUCING AN ARRAY

const numbers = [1, -1, 2, 3];

// algorithm to calculate the sum of an array
let sum = 0; // add each element in array to 'sum' value
for (let n of numbers)
    sum += n;
console.log(sum);


// .reduce() reduces all elements into a single number
//takes two values, accumulator & currentValue
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); 									// second argument goes here       
console.log(sum);

// even shorter
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue);

	console.log(sum);


// ARRAY FROM RANGE
// give two values and output the numerical range in an array
const numbers = arrayFromRange(-10, -5);

console.log(numbers);

function arrayFromRange(min, max) {
    //create empty array
    const output = [];
    //for loop to generate numbers
    for (let i = min; i <= max; i++)
        //push output into array
        output.push(i);
    return output;
}  


// INCLUDES
// create function called 'includes' that takes an array and a search element. If we have the search element in the array we should return 'TRUE', else 'FALSE'
const numbers = [1, 2, 3, 4];

console.log(numbers.includes(numbers, 7));

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}

// also works with just this
const numbers = [1, 2, 3, 4];
console.log(numbers.includes(2));
































Create React App

create-react-app react-app
					^ name of file
					
npm start <--- launches server

if we have a FUNCTION inside an OBJECT, we refer to that FUNCTION as a METHOD	

Binding
const person = {
	name: "Mosh",
	walk() {
		console.log(this);
  }
};

person.walk();

const walk = person.walk.bind(person);
walk();			


Value Types

NUMBER
String
Boolean
Symbol
undefined
null

Reference Types























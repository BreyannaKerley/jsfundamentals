/*
Booleans: have only two possible values: TRUE or FALSE
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
NULL: think of it like an empty value. It is an empty container. Nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty)

/*
UNDEFINED: no value is assigned and it does not act as an empty container
*/

let undef; /* this is automatically be undefined*/
console.log(undef);

/*
NULL vs UNDEFINED:
Null:
    - Null is like a container with nothing in it
    -Undefined is when a variable has never been set(initialized), or doesn't exist yet.
    
    think of variables with null and undefined as packages coming out of UPS
    Null packages are packages that were intentionallhy packed up with nothing, but have been assembled
    Undefined packages are basically boxes that need to be assembled and given something to ship.
*/

/*
NUMBERS: numbers are literally just numbers. Don't need to write anything special in JS.
*/

let degrees =90;
console.log(degrees)

let precise = 999999999999999 //15 nines
console.log(precise);

let rounded = 9999999999999999 
console.log(rounded); //16 nines gives you space for 15 nines before it rounds up

let notQuite = 0.2 + 0.1;
console.log(notQuite); //JS rounds out a certain number. so if math is needed beware!

let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10;
console.log(numbersAreHard)

/*
STRINGS: strings are a DataType to represent text and are wrapped in a single quote ('') or double quote ("")
*/

let stringOne = "Oh hi Mark";
let stringTwo = 'Oh hi Mark';
console.log(stringOne, stringTwo); //yields same output

//Numbers vs Strings
let first = 1050 + 100
let second = '1050' + '100' // this is String Concatenation

console.log(first); //number actual math
console.log(second); //string

/*
OBJECTS:    are used to store many values instead of singular value and they are denoted by using {}
*/

let frodo = {
    race: 'hobbit', 
    rings: 1,
    cloak: true
}
console.log(frodo);
console.log(typeof frodo)

/*
ARRAYS: are containers that hold lists of items. denoted by [] and a comma separated list of itmes. all items in an ARRAY don't have to be the same dataType
ie: 
*/

let list = [ 'item1', 'item2', 'item3' ] 
let list = ['item1', undefined, 3 ]
//  (1)     (2)         (3)
/*
1. name of the array or list;
2. arrays use square brackets
3. each item, regardless of dataType, and is separated by commas
*/

let burritos = ['large', 4, true]
console.log(burritos);

console.log(typeof burritos) //behind the scenes anything that can hold multiple things (object AND array) it comes back as an object.
//Arrays are also containers that can hold multiple dataTypes. So JS has classified arrays as objects and not it's own dataType.

/* 

    - when JS sees that we're trying to combin two or more numbers, it adds the values together using the built in math functionality
    - when JS sees us trying to add together one or more strings, instead of using the built in math functionality, it combines the two strings instead without synthesizing the values.
*/ 

let example = 1050 + '100'; //1050 is number, 100 is string. Coersion. JSJ Behind the scenes assumes that user made a mistake and you are trying to concatenate (pair) two strings, instead of do math with the values.
console.log(example);
console.log(typeof example); //this checks the dataType for you

/*
Challenge:
set 7 or 8 variables:
*/

let firstName = 'Brey'; //intialized it with a value which is a string
let lastName = 'Kerley';
let houseNumber = 16542; //a number
let street = 'Sunset Ave'; //string
let city = 'Indianapolis';
let state = 'IN';
let zipcode = 45208;

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode)   
 //anytime you console log more than one variable and sep with a common, those will come right after each other and have a space too. if we include a common after lastName it will actually give you an extra space between that word and the comma
 console.log(`${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipcode}`); //string interpolation - to use this you have to use the back tic`
console.log(`hello my name is ${firstName}`)

/*
STRING PROPERTIES:
    - properties are qualities that are associated with the dataType
*/

let myName = 'Brey'; //we hvae assigned it a value of the string of Brey
console.log(myName.length); //we use a . to show the qualities that are associate with that value. this one runs 4

/*
STRING METHODS
    - methods are tools that help us manipulate the data
        - how are they denoted?
        .properties ie:  .length   **no parenthesis**
        .methods()  
*/

let myNameIs = 'BreyBrey';
console.log(myNameIs.toUpperCase()); // method that changes a string to uppercase. you haven't told it to run the function yet by setting up the additional parenthesis

let hometown = 'my hometown is the Bronx';
console.log(hometown.includes('Bronx')); //method that checks if a certain string is included in another string.  does the hometown variable include a string of 'bronx'? **THIS IS CASE SENSITIVE

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string
//try searching MDN and W3 schools:
//       "" javascript mdn docs string methods ""
let sent = 'This sentence will be split into individual parts';
let splits = sent.split()

console.log(splits)

let sent = 'This sentence will be split into individual parts';
console.log(sent.split(" ", 7)); //""
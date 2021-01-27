/*
Notes:
-Variables: are named containers for storing values and referring to late (we can name them whatever we want)
    Rules:
        - a variable(let) name must begin with letter, underscore, or dollar sign
        - numbers may follow the above characters, but cannot come first
        - Javascript IS CASE SENSITIVE - 'Hi' and 'hi' are different variables
        - no spaces are allowed in variable names, so...
        - use camelCasing for best practice naming variables
        - this helps keep everything legible - ie: let myName='Breyanna';

*/

 
let a = 2;

let     b       =   2;
/*(1)   (2)     (3) (4)

1. Keyword
2. Variable name (we can name this whatever we want, but the name we give a variable should be relevant to the type of data it's holding. Ie you wouldn't pack up a box with dishes and then label it clothes. That would be confusing)
3. Assignment Operator (it's the thing assigning the value that the variable is equal to what's on the other side of the equal sign)
4. Variable value

Var, Let, and Const:

-var: 'old' keyword for variables **won't be using in this course too often**
-let:  'new' keyword for variables
-const: also 'new'; declares unchangeable variable ie. this variable will not change later in our code
*/

/*
Notes:
-declarations: are the on LEFT side of a variable
    -it is simply: let x
    -declarations are on the left side of the assignment operator (=)
-initialization: are on the RIGHT SIDE of the variable
    -it sets the value of the variable
    -it incorporates the variable name(x), the assignment operator (=), and the value (10) => x = 10 */

let x;
console.log('declaration',x); /*this will yield UNDEFINED because we have declared a variable X but we haven't set it equal to anything. it has no value, so the value is undefined*/

x = 10;
console.log('Initialization',x);

x= 33;
console.log('Initialization 2',x); /*this is a re-initializion*/

let y = 'Hello';
console.log('Both:', x, y);
/*Const*/

let today = "Great";
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty);

today = 'Lovely';
elevenFifty = "Fantastic"
console.log(today, elevenFifty);



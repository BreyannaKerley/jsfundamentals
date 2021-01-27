/*
LITERALS
    - a literal represents a fixed value (there are array literals, boolean literals, etc)
        - literals include:
            - string literal
            - numeric literal
            - boolean literal
            - object literal
            - array literal

    - literals are simply just values that we as developers add to our code
*/

// string literal
let car = 'Ford'; //we have literally added it on our own, it hasn't been pulled from somwhere else

// numeric literal
let december = 12;

// boolean literal
let tired = true;

// object literal - colon after the key assigns the value and each key value pair is separated with a comma
let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}

console.log(soup.b); //.notation is specific to objects. {} are arrays

//**KEYWORDS ARE BUILT INTO JAVASCRIPT** */
/*
    -when working with objects, using dot notation allows us to dive into the objects and grab a specific piece of data

 ******   .notation and {} are specific to objects. ******
 ******   Bracket notation and [] are specific to arrays ******
*/

//array literal - denoted by []
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days[2]) //square bracket notation allows you pull a certain item from the array

/*
    - when working with arrays, using square bracket notation allows us to pull a singular value out of the array by its index number ie. 0,1,2.
    - when working with indices, JavaScript will start counting from 0
    - when using the length property, JS will start counting from 1
*/
console.log(days.length);

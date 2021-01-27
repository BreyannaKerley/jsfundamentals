// equal
console.log(3 == 3); // true
console.log('3' == 3); // true JS is running the coersion (the process of converting one type to another). JS is assuming you wrote it incorrectly and are trying to actually compare the same information type

// strict equal check - this overrides JavaScript coersion
console.log(3 == 3); //true
console.log('3' === 3); //false

// not equal check
console.log('3' != 3); // is a string of 3 not equal to a number of 3? false

//strict not equal
console.log('3' !== 4); // true

// greater than
3 > 2; //true

// less than
2 < 3; //true

//greater than or equal to
3 >= 2; //true - dont confuse this with "fat arrow functions ie => which only point to the right"

// Less than or equal to
2 <= 3; // true

// and  :: checks if multiple values are true or false
let x = 5;
let y = 6;

if(x >= 1 && y >= 1){
    console.log('true');
}


// or :: allows also allows up to check multiple values, but only one of the values need to be true or false, whereas && ALL need to be true/false in case of &&
2 || 3; // 
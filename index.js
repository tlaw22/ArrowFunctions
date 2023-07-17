const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

const city = 'New York City';
function logCitySkyline(){
let skyscraper = 'Empire State Building'
return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline());

/* Arrow Functions (ES6)

Arrow function expressions were introduced in ES6. These expressions are clean and concise. The syntax for an arrow function expression does not require the function keyword and uses a fat arrow => to separate the parameter(s) from the body.

There are several variations of arrow functions:

    Arrow functions with a single parameter do not require () around the parameter list.
    Arrow functions with a single expression can use the concise function body which returns the result of the expression without the return keyword.


    Anonymous Functions

Anonymous functions in JavaScript do not have a name property. They can be defined using the function keyword, or as an arrow function. See the code example for the difference between a named function and an anonymous function.

return Keyword

Functions return (pass back) values using the return keyword. return ends function execution and returns the specified value to the location where it was called. A common mistake is to forget the return keyword, in which case the function will return undefined by default


    */


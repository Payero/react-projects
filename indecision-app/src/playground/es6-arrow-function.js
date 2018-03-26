console.log("Running new File");

const square = function( x )
{
  return x * x;
}

const sq = 8;
console.log("Square of ", 8, " = ", square(sq));

const sqArrow = (x) =>  
  { 
    return x * x 
  };
console.log("Square of ", 8, " = ", sqArrow(sq));

// equivalent arrow function
const equivSqArrow = (x) => x * x;

console.log("Square of ", 8, " = ", sqArrow(sq));

// Challenge use arrow function getFirstName to get the firstName

const getFirstName = (fullName) => fullName ? fullName.split(' ')[0] : 'Invalid';

const name = "Oscar Ganteaume"
console.log("First Name", getFirstName(name));

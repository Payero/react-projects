var nameVar = 'Oscar';
var nameVar = 'Mike';
console.log('nameVar ', nameVar);

//  Cannot redefined a let variable, you can reassign it
let nameLet = 'John';
nameLet  = 'Mary';
console.log('nameLet', nameLet);

const nameConst = 'Frankie';

console.log('nameConst', nameConst);

// var statement is function scope, but const and let are block scope
// the example below will work only if set as var and NOT as const or let
// unless is defined outside the block first

const fullName = 'Oscar Ganteaume'
let firstName;

if( fullName )
{
  firstName = fullName.split(' ')[0];
  console.log("First Name", firstName);
}

console.log("After Block:", firstName);
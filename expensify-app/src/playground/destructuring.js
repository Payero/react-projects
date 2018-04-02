

// const person = {
//   name: 'Oscar',
//   age: 48,
//   location: {
//     city: 'Falls Church',
//     temp: 67
//   }
// };

// // const name = person.name;
// // const age = person.age;
// // Setting the variables straight from the person object and setting a default value to name
// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age}` );

// // Renaming the temp variable to temperature from the person.location
// const { city, temp: temperature } = person.location;

// if (city && temperature )
//   console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name:pubName = 'Self Published'} = book.publisher;
// console.log("Pulisher", pubName);

// Destructuring an array
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// Getting all of them
const [street, city, state, zip] = address;
// Getting only the first two
const [street2, city2] = address;
// Skipping street and getting only city and state
const [, city3, state3] = address;
// Getting state only
const [, , state4] = address;


console.log(`You are in ${city} ${state}`);
 
const item = ['Coffeee (Iced)', '$2.00', '$3.50', '$2.75'];
const [name, ,price] = item;
console.log(`A medium ${name} costs ${price}`);

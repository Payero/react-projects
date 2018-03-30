const person = {
  name: 'Oscar',
  age: 48,
  location: {
    city: 'Falls Church',
    temp: 67
  }
};

// const name = person.name;
// const age = person.age;
// Setting the variables straight from the person object and setting a default value to name
const {name = 'Anonymous', age} = person;

console.log(`${name} is ${age}` );

// Renaming the temp variable to temperature from the person.location
const { city, temp: temperature } = person.location;

if (city && temperature )
  console.log(`It's ${temperature} in ${city}`);

  const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
      name: 'Penguin'
    }
  };

  const {name:pubName = 'Self Published'} = book.publisher;
  console.log("Pulisher", pubName);
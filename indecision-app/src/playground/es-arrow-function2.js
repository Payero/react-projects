// arguments object - no longer bound with arrow functions

const add = (a, b) =>
{
  return a + b;
}

console.log( add(10, 20, 10, 10 ) );

// this kews no longer bound
const user = 
{
  name: 'John Doe',
  cities: ['Miami', 'Boca Raton', 'Falls Church'],
  printPlacesLived()
  {
    return this.cities.map((city) => `${this.name} has lived in ${city}`);
    // return cityMessages;
  },
  age: 25
}

console.log( user.printPlacesLived() );

const multiplier =
{
  numbers: [1,2,3,4,5],
  multiplyBy: 10,
  multiply()
  {
    return this.numbers.map( (number) => this.multiplyBy * number );
  }
}

console.log( multiplier.multiply() );

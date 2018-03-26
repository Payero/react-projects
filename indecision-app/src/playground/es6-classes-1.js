class Person 
{
  constructor(fullname = undefined, age = 0) 
  {
    console.log("Creating new Object")
    this.name = fullname;
    this.age = age;
    
    console.log("The Name ", this)
  }

  getGreeting()
  {
    //return 'Hi, I am ' + this.name + '!';
    // We can use template as long as it uses back-tick
    return `Hi. I am ${ this.name }!`;
  }

  getDescription()
  {
    return `${ this.name } is ${ this.age } year(s) old.`
  }

}

class Student extends Person
{
  constructor(name, age, major = undefined)
  {
    super(name, age);
    this.major = major;
  }

  getMajor()
  {
    return this.major;
  }


  hasMajor()
  {
    // if major is undefined it returns false
    return !!this.major;
  }

  getDescription()
  {
    let desc = super.getDescription();
    if( this.hasMajor() )
    {
      return `${desc} And is pursuing ${this.major}!`
    }
    else{
      return desc;
    }
    
  }

}

class Traveler extends Person
{
  constructor(name, age, homeLocation = undefined)
  {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting()
  {
    let greet = super.getGreeting();
    if( this.homeLocation )
      return `${greet} I am visiting from ${this.homeLocation}`;
    else
      return greet;
  }
}

const me = new Student('The Student', 48, 'Computer Engineer');
console.log(me.getDescription());

const other = new Student('The Other Student', 20, 'None');
console.log(other.getDescription());

const traveler = new Traveler('The Traveler', 0, 'El Tigre')
console.log(traveler.getGreeting());


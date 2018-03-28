import React from 'react'
import ReactDOM from 'react-dom'

// components
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax
{
  constructor(props)
  {
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting()
  {
    return `Hi. My name is ${this.name}.`;
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);
console.log(oldSyntax.getGreeting());

//---------------------------------------------

class NewSyntax
{
  name = 'Jen';
  getGreeting = () => `Hi. My name is ${this.name}.`;

}
const newSyntax = new NewSyntax();
console.log(newSyntax);
console.log(newSyntax.getGreeting());
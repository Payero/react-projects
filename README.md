# react-projects
Udemy Course projects


## NPM Notes


### Installing Required Software
* Install Babel
   * `npm install -g babel-cli`
* Install Babel Presets
  * `npm install --save-dev babel-cli babel-preset-react`
  * `npm install babel-preset-env --save-dev`
* Installing Live Server
  * `npm install -g live-server`


### Creating New Project
* Create a new directory and cd into it
* Initialize the project
  * `npm init`
* Getting all the required packages
  * `npm install`


## Running the Project
There are basically two commands that need to be running continuously to see
the changes live: live-server and babel.

### Live Server

live-server is a simple website server: <br>
      live-server `<directory with index.html file >`


### Babel
Babel compiles the react code and turn it into JavaScript
that is compatible with all the Browsers.  The following command takes the src/app.js file compiles it and saves it as `public/scripts.js`.  The result file is defined using the `--out-file`.  The presets are used to tell Babel what are the compilations it needs to do such as react and env.  The `--watch` makes babel to monitor the file and every time is saved babel recompiles it.  This is a great alternative for development.
  * babel src/app.js --out-file=public/scripts.js --presets=env,react --watch





### Cleaning Project
* Just delete the node_modules directory, this is being created when running
  npm install


## React Notes

To avoid reloading the whole page once an event is triggered call the following function: `event.preventDefault();`

The `event` object contains all the needed elements.  They are accessible as `event.target.elements.name` where "target" is the document itself and *name* is the name of the element to retrieve.

All the classes extending React.Component needs to have the first letter capitalized

To load a component:
  - `ReactDOM.render( <MyComponent />, document.getElementById('app'));`

To set the state of a component properly.  The setState UPDATES the state it does not create a new one.  This means that ONLY the changes need to be returned and not the whole thing.
```JavaScript
  this.setState( (prevState) =>
  {
    // Here we can do any processing
    // It has to return the new state with ONLY the components that changed
    return { justme: 'I am the only one what changed'} ;
  });
```
Difference between props and state in React Components

| Props                                 | State                              |
| :------------------------------------ | :----------------------------------|
| An object                             | An object                          |
| Can be used when rendering            | Can be used when rendering         |
| Changes (from above) cause re-renders | Changes cause re-renders           |
| Comes from above                      | Defined in component itself        |
| Can't be changed by component itself  |  Can be changed by component itself|


## JavaScript Notes

### ES6 Variables Declaration
Before all the variables were declared as var.  Doing that makes the variable
global and should be avoid at any cost.  The following is a recommended guideline to declare variables:
* **const**: Should be the first choice.  Using this declaration means that the variable will not be modified
* **let**: Should be used to set local scope to a function or set of curly brackets
* **var**: Last resort as it makes the variable global and is not recommended


### Creating a Random number based on a list
```JavaScript
function gerRandomValue(myList)
{
  const rand = Math.floor(Math.random() * myList.length);
  const option = myList[rand];

  return option;
}
```
### Initializing React Component Classes
To properly extend a `React.Component` object the constructor needs to be created as follow:
```JavaScript
  constructor(props)
  {
    super(props);
    // Add all the methods here and bind them to the 'this' object
    this.myOwnMethod = this.myOwnMethod.bind(this);
  }
```

### Arrow Functions
The following three functions are equivalent

```JavaScript
const square = function(x){
  return x * x;
}

const square = (x) => {
  return x * x;
}

const square = (x) => x * x;

```

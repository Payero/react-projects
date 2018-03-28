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

Adding default values to a component, say Header, is as simple as adding an object similar to:
```JavaScript
Header.defaultProps = {
  name1: 'value-1',
  name2; 'value-2
}
```

Stateless Function Components is another type of component.  They load faster than class based and are simpler to read a write.  If you create a React component and it only has the render method, then it could be a good candidate for a stateless function component.  The following example shows two equivalent components.

**Class Based Component**
```JavaScript
class Header extends React.Component
{
  render()
  {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
```

**Stateless Functional Component**
```JavaScript
const Header = (props) =>
{
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
```

Lifecycle Methods
When using these methods you have access to this.props and this.state.  Here are just some of them, search for react lifecycle components

* **componentDidMount()**: This is fired when the component is mount to the DOM.  Available only to class based components
* **componentDidUpdate(prevProps, prevState)**: fire after the component update.  When the props or state updates
* **componentWillUnmount()**:  Is called when the component is removed from the DOM

Updating the state
The following are the steps used by React to update the component state

1. Setup default state object
2. Component rendered with default values *
3. Change state based on event such as click button
4. Component re-rendered using new state values *
5. Start again at step 3
 
 (*) means that was automatic
  
 *REMEMBER*: If you have multiple pieces in the state, you do not need to return
 all of them just the ones that needs to be modified
 


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

localStorage allows you to get, set, and remove key-value String data pairs.  This is a persistent technique
```JavaScript
localStorage.setItem('name', 'John');
localStorage.getItem('name');
localStorage.removeItem('name');
```

When setting a key-value pair where the key name is the same as the variable name, it can be shorthanded as follow
```JavaScript
var name = 'John Doe`;
var d1 = { 'name': name };
var d2 = { name };
```

The order in which JavaScript files are loaded in the html files is important for dependencies.  For instance, all the react libraries need to be referenced or loaded prior the actual application using it.
```html
    <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
    <script src="/scripts/app.js"></script>
```

## Import, Export, Require
When using require you need to assign it to a variable for example `const path = require('path');`.  In this case all the exported methods in path will be accessible through the path variable.  Require is a npm way of importing modules into the application. The preffer way of doing it is to use the ES6 syntax.  The commands below show both ways

```JavaScript
  // npm way of importing a librarry called validator
  var validator = require('validator');

  // ES6 way of importing the same library
  import validator from 'validator';

```

### Importing and Exporting named functions/variables
When using the import keyword you need to specify a relative path with respect of the file importing it.  Only those methods specified as export will be available.  The syntax is  `import './path/file.js'` where the extension ".js" is optional.  In this case you do not need to assign a variable to the import statement as in when using `require`.  The import statement above just loads the file, but to import named exports we need to use `import { namedExport } from './files.js'`

When exporting items from a source file it uses the export keyword.  A very important thing to keep in mind is that the generated object **IS NOT** a dictionary.  For instance to export the 'square' function the export should look `export { square }`.  Notice that even though we are using curly brackets the object is not a key-value pair.  The export can have a default export and multiple named exports.
The following two ways of exporting square and add methods are equivalent:

```JavaScript
// in the utils file
const square = (x) => x * x;
const add = (x, y) => x + y;
export { square, add };

// or
export const square = (x) => x * x;
export const add = (x, y) => x + y;

// in the app.js file they can be imported as
import { square, add } from 'utils.js'
```

### Importing and Exporting default export
in a single file there can be either none or only one default export.  The following is the same example as the one above with the correct syntax to declare a new 'subtract' function set as the default export:

```JavaScript
// in the utils file
const square = (x) => x * x;
const add = (x, y) => x + y;
const subtract = (a,b) => a - b;
export { square, add, subtract as default };

// in the app.js file they can be imported as
import subtract, { square, add } from 'utils.js'
```
Attempting to add the default export in the curly bracket will throw an error as it is not exported (Invalid: `import { square, add, subtract } from 'utils.js'`)
One advantage of setting a default export is that it can be called anything we want as long as we use the same name.

```JavaScript
// perfectly valid import statement
import methodToSubtractTwoValues from 'utils.js'
methodToSubtractTwoValues(3, 2);
```
To create an inline export command we can do it as `export default (a,b) => a - b;`



## WebPack
Is a module bundeler.  It also allows to organize JavaScript by createing a single bundle file with all the dependencies and source code.
To continuously run webpack we can add the '--watch' to the script command so changes in the source files will triggered a new bundle
It uses a config file that requires:
* **entry**: where to start looking for dependencies
* **output**: the name of the bundled file used by the html.  It consists of an object with:
  * **path**: the absolute path where to store the file.  You can use the __dirname to get the directory name where the webpack.config.js file is located
  * **filename**:  The actual name of the bundled file
* **mode**: the running mode or environment such as 'developmet' or 'production'
* **loader**: functions as the transformer from React to actual javascript.  Babel is an example of a loder.  The loader is part of the module object. The actual configuration is a list of rules and each rule has the loader to use as well as test.  The test attribute determines which files to load ad it could be a regular expression.  The exclude attribute tells the loader not to load those files

When using a loader in the webpack.config.js file we need to pass the presets to the loader.  The way is done in babel is by creating a new file called .babelrc with the presets i.e: `{ "presets": [ 'env', 'react' ] }`

You can add source map as a devtool as debugging tool to find where in the code an error is thrown.  This is desirable because the line number thrown in the console is from the bundled file and not the actual code.  The [devtool values](https://webpack.js.org/configuration/devtool/#src/components/Sidebar/Sidebar.jsx) to user are defined in the webpack page.  What to use is explained below under Development and Production.

More information can be found in the [Webpack Documentation Page](https://webpack.js.org/concepts/).

Babel has a feature under development Stage 2 to make it easier creating classes.  It will remove the need to bind methods when creating new classes as well as other benefits.  More details can be found [here](https://babeljs.io/docs/plugins/transform-class-properties/).  This feature is added to the .babelrc file after installation


### WebPack DevServer
It is used to replace the live-server so we no longer have the need to run two separate commands: live-server and webpack.  WebPack DevServer uses the same webpack.config.js file to launch so the only command needed would be dev-server once is defined in the package.json scripts section i.e: `'dev-derver': 'webpack-dev-server`. 
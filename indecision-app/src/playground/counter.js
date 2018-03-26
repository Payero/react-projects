/*
  Configuration Steps

  Install babel npm install -g babel-cli

  Initialize project
    yarn init

  Install presets:
    npm install --save-dev babel-cli babel-preset-react
    
    npm install babel-preset-env --save-dev


    Clean Install:  Remove the node_modules and run npm install


*/


// NOTE:  This file is compiled and saved in the root (public) directory and that is what
//        is used by index.html
//
//  To Compile using babel, run the following command 
//    babel src/app.js --out-file=public/scripts.js --presets=env,react
//
//  To continuously monittoring the source file and compile it every time it changes
//    babel src/app.js --out-file=public/scripts.js --presets=env,react --watch
  
// Extensions for code:
//    Babel ES6/ES7
//    Path Intellisense
//

const appRoot = document.getElementById('app');

let count = 0;
const addOne = () => {
  count++;
  console.log("Count", count)
  renderCounterApp();
};

const minusOne = () => {
  if( count > 0 )
    count--;
  console.log("Minus", count)
  renderCounterApp();
};

const resetCount = () => {
  count = 0;
  console.log("Resetting Count", count)
  renderCounterApp();
};


console.log(count)

const renderCounterApp = () =>
{
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot)
};

renderCounterApp();
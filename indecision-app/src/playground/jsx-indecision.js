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

console.log('The App.js is running')
const appRoot = document.getElementById('app');

/*
 *  Challenge  2: Create app object with title/subtitle and render template
 * 
 * Challenge 3: Only render subtitle if exists
 * render new p tag if options.length > 0
*/
const app = {
  title: 'Indecision App',
  subtitle: "Make a decision, is not that hard",
  description: "The Path to Perfection",
  options: []
};

const onFormSubmit = (event) => {
  // prevents loading the whole page
  event.preventDefault();
  // the target that triggered the event (form) is the target
  const option = event.target.elements.option.value;
  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';
    renderApplication();
  }

  console.log("Submitting Form")
};

const onRemoveAll = () => {

  app.options = [];
  renderApplication();
};

// Generate a random number and return that option
const onMakeDecision = () => {
  const rand = Math.floor(Math.random() * app.options.length);
  const option = app.options[rand];
  console.log("Random Value", option);
  alert(option);

};

const renderApplication = () => {
  // JSX - JavaScript XML
  const template = (
    <div>
      {app.title && <h1>{app.title}</h1>}
      {app.subtitle && <h2>{app.subtitle}</h2>}
      {app.description && <p>{app.description}</p>}
      <p>{(app.options && app.options.length > 0) ? "Here are your Options" : "No Options"}</p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>What Should I Do?</button>
      <button disabled={app.options.length == 0} onClick={onRemoveAll}>Remove All</button>

      <ol>
        {
          app.options.map((item) => <li key={item}>Option: {item}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApplication();

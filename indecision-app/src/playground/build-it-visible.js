
const root = document.getElementById('app');

let app = {
  visible: true,
  btnTxt: 'Hide Details',
  text: 'Here are all the Details to show'
};

const toggleVisibility = () => {
  console.log("Clicked Button");
  app.visible = !app.visible;
  render();
};

console.log( JSON.stringify(app) );

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {app.visible ? 'Hide Details' : 'Show Details'}
      </button>
      { app.visible && <p>{app.text}</p> }
    </div>
  );

  ReactDOM.render(template, root);  
};

render();
console.log( JSON.stringify(app) );
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import 'normalize-css/normalize.css';
import './styles/styles.scss';


const Test = (props) => {

  return (
    <div>
      <p>This is a test</p>
    </div>
  )

};

ReactDOM.render(<Test />, document.getElementById('app'));


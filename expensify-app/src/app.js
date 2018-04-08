import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize-css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log( store.getState() );

store.dispatch( addExpense({ description: "Water bill", amount: 100 }) );
store.dispatch( addExpense({ description: "Gas bill", amount: 200 }) );
store.dispatch( setTextFilter( 'water' ) );

const state = store.getState();
const visible = getVisibleExpenses(state.expenses, state.filters);

console.log( visible );

ReactDOM.render( <AppRouter />, document.getElementById('app'));


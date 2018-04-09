import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {} 
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
const removeExpense = ( { id } = {} ) => ({
  type: 'REMOVE_EXPENSE',
  id
});


// EDIT_EXPENSE
const editExpense = (id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = ( text = '' ) => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SET_SORT_BY',
  sortBy: 'date'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SET_SORT_BY',
  sortBy: 'amount'
});

// SET_START_DATE
const setStartDate = (date = undefined) => ({
  type: 'SET_START_DATE',
  startDate: date
});
// SET_END_DATE
const setEndDate = (date = undefined) => ({
  type: 'SET_END_DATE',
  endDate: date
});

// Expenses Reducer
const expensesReducer = ( state = [], action ) => {
    switch( action.type ) {
        case 'ADD_EXPENSE':
          // concat adds the expense to the current state and returns a new
          // array without modifying the original
          return [ ...state, action.expense ];

        case 'REMOVE_EXPENSE':
          return state.filter( ({ id }) => id !== action.id );
        
        case 'EDIT_EXPENSE':
          return state.map( (expense) => {
            if( action.id === expense.id)
              // gets all the items from expense and overwrites them with updates
              return { ...expense, ...action.updates};
            else
              return expense;
          });
        default:
        return state;
    }
};


// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        
        return {
          ...state,
          text: action.text
        };
      case 'SET_SORT_BY':
        return {
          ...state,
          sortBy: action.sortBy
        }
        case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.startDate
        };
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate
        };
      default:
        return state;
    }
};

// Get visible expenses
// const getVisibleExpenses = (expenses, filters) => {
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
  
  // Filter:  If it matches the criteria is removed or filtered out
  return expenses.filter( (expense) => {
    
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <=  endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    
    // console.log("ID", expense.id, "start", startDateMatch, "end", endDateMatch, "text", textMatch);
    return startDateMatch && endDateMatch && textMatch;
  }).sort( (a, b) => {
    
    if( sortBy === 'date' ) {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if( sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Creating Store
const store = createStore( 
    combineReducers( {
        expenses: expensesReducer,
        filters: filtersReducer
    }) 
);

store.subscribe( () => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log( visibleExpenses );
});
const expenseOne = store.dispatch( addExpense( { description: 'Rent', amount: 100, createdAt: -21000 }) );
const expenseTwo = store.dispatch( addExpense( { description: 'Coffee', amount: 300, createdAt: -21000 }) );
// store.dispatch( removeExpense( { id: expenseOne.expense.id }) );
// store.dispatch( editExpense( expenseTwo.expense.id, { amount: 500, 'description': 'Better Coffee'} ) );

// store.dispatch( setTextFilter('tea') );
// store.dispatch( setTextFilter() );

store.dispatch( sortByAmount() );
// store.dispatch( sortByDate() );

// store.dispatch( setStartDate(0) );
// store.dispatch( setStartDate() );

//  store.dispatch( setEndDate(999) );
// store.dispatch( setEndDate() );


const demoState = {
    expenses: [{
        id: 'poison-flower',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

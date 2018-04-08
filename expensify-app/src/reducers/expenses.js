
const expensesReducerDefaultState = [];

// Expenses Reducer
export default ( state = expensesReducerDefaultState, action ) => {
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

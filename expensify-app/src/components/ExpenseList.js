import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem  from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.map( (expense, index) => {
        return <ExpenseListItem  key={expense.id} {...expense}  />
      })
    }
  </div>
);

// as the store changes, this is called and the state is updated which
// updates the values here
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// The connect returns a function that needs to be called with the component
// so a High Order Component can be created.  In this case ExpenseList
export default connect( mapStateToProps )(ExpenseList);


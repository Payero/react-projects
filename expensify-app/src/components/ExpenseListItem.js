import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ( {dispatch, id, description, amount, createdAt } ) => {

  return (
    <div>
      <h3>{description}</h3>
      <p>{amount} - {createdAt}</p>
      <button onClick={ (e) => {
        console.log("Clicked", id);
        dispatch(removeExpense({ id }));
        }}
      >Remove</button>
    </div>
  );
};

// // as the store changes, this is called and the state is updated which
// // updates the values here
// const mapStateToProps = (state) => {
//   return {
//     description: state.description,
//     amount: state.amount,
//     createdAt: state.createdAt
//   };
// };

// export default connect(mapStateToProps)(ExpenseListItem);

export default connect()(ExpenseListItem);

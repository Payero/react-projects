import  { createStore } from 'redux';

// Action generators - functions that return action objects

const add = ({ a, b }) => {
  return a + b;
};




console.log(add( {a: 1, b: 12 }));


// need a default to avoid errors when payload.incrementBy.  
// 4. If the name of the property and the variable name are the same this can be
//    simplified as one single attribute
const incrementCount = ( { incrementBy = 1 } = {}  ) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ( { decrementBy = 1} = {} ) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ( { count } = {} ) => ({
  type: 'SET',
  count
})

const resetCount = ( ) => ({
  type: 'RESET'
})

const countReducer = (state = { count: 0 }, action) => {
  switch( action.type )
  {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  }
  
};

const store = createStore( countReducer );

const unsubscribe = store.subscribe( () => {
  console.log(store.getState() );
});

// I'd like to increment the count
store.dispatch( incrementCount() );
store.dispatch( incrementCount({ incrementBy: 5 }) );

store.dispatch( resetCount() );

store.dispatch( decrementCount() );
store.dispatch( decrementCount( { decrementBy: 10 }) );


store.dispatch( setCount( { count: -101 }));

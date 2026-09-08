

import React, { useReducer } from 'react';
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {  count: state.count + 1 };
    case 'SUB':
      return {  count: state.count - 1 };
    case 'addten':
      return {  count: state.count + action.payload };
    default:
      return state;
  }
}
function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
          
            <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
            <button onClick={() => dispatch({ type: 'SUB' })}>Subtract</button>
            <button onClick={() => dispatch({ type: 'addten', payload: 10 })}>Add 10</button>
            <p>Count: {state.count}</p> 
        </div>
    );
}
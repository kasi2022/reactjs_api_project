// Count.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incremented, decremented } from './slice';

function Count() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incremented())}>+</button>
      <button onClick={() => dispatch(decremented())}>-</button>
    </div>
  );
}

export default Count;

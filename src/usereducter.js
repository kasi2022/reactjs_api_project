import React, { useReducer } from 'react'

const initialState = { 
    count: 0 

    
};
    function reducer(state, action) {
        switch (action.type) {
          case "increment":
            return { ...state, count: state.count + 1 };
          case "decrement":
            return { ...state, count: state.count - 1 };
          default:
            return "Unrecognized command";
        }
      } 
     
function Usereducter() {
    
    const [state, dispatch] = useReducer(reducer,initialState );
    function handleIncrement() {
        dispatch({ type: "increment" });
      }
    
      function handleDecrement() {
        dispatch({ type: "decrement" });
      }
    return (
        <>
          <h1>Count:{state.count}</h1>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </>
      );
  
}

export default Usereducter

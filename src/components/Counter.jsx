import { useState, useReducer } from "react";

const initialState = {
  count: 0,
  numberToChangeBy: 1,
};

const reducer = (state, action) => { //shows all the states and actions taken
  switch (action.type) {
    case "count":
      return { ...state, count: state.count };//displays count
    case "numberToChangeBy":
      return { ...state, numberToChangeBy: state.numberToChangeBy };
    case "increment":
      return {
        ...state,
        count: parseInt(state.count, 10) + parseInt(state.numberToChangeBy, 10),
      };
    case "decrement":
      return {
        ...state,
        count: parseInt(state.count, 10) - parseInt(state.numberToChangeBy, 10),
      };
    case "changeNum":
      return { ...state, numberToChangeBy: action.value };
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (<div className="App">
    <pre className="rainbow box text-center">Value {state.count}</pre>
    <div className="flex gap center">
        <button className="button-box" onClick={() => dispatch({type:'increment'})}>
          <span className="huge">+</span>Increment by {state.numberToChangeBy}
        </button>
        <button className="button-box" onClick={() => dispatch({type:'decrement'})}>
          <span className="huge">-</span>Decrement by {state.numberToChangeBy}
          </button>
    </div>

    <p className="flex gap center">
      <label className="button-box" htmlFor="number">Number to Increment/Decrement by </label>
      <input className="input-box" onChange={(e) => dispatch({type:'changeNum',value:e.target.value})} type="number" value={state.numberToChangeBy} name="number" id="number" />
    </p>
  </div>);
};

export default Counter;

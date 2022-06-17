//useReducer hooks is alternative to useState hook
//if we want to track  more than two state at once then we use useReducer hook
//we we want to do multiple action on single state then we use useReducer hook

import React, { useReducer } from "react";
import Home from "./Home";
import "../mycss.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, text: state.text };
    case "TOGGLESHOWTEXT":
      return { count: state.count, text: !state.text };
    case "DECREMENT":
      return { count: state.count - 1, text: state.text };
  }
};

const ForUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, text: true });
  const fun1 = () => {
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "TOGGLESHOWTEXT" });
  };
  const fun2 = () => {
    dispatch({ type: "DECREMENT" });
    dispatch({ type: "TOGGLESHOWTEXT" });
  };

  return (
    <>
      <Home />
      <div className="container">
        {state.count}
        <div className="buttons">
          <button onClick={fun1}>increment</button>
          <button onClick={fun2}>decrement</button>
        </div>
        {state.text && <p>i am text {state.count}</p>}
      </div>
    </>
  );
};

export default ForUseReducer;

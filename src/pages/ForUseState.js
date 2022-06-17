import React from "react";
import Home from "./Home";
import "../mycss.css";
import { useState } from "react";

const ForUseState = () => {
  const [counter, setCounter] = useState(0);
  const [inputvalue, setinputvalue] = useState("hello");
  const myfun = function () {
    setCounter(counter + 1);
  };
  const onchangefun = function (event) {
    let valueis = event.target.value;
    setinputvalue(valueis);
  };

  return (
    <>
      <Home />
      <h2>increment counter</h2>
      <div className="countsection">
        {counter}
        <button
          type="button"
          className="btn btn-primary countbtn"
          onClick={myfun}
        >
          click me
        </button>
      </div>

      <div className="mynext">
        <h2>form control</h2>
        <div className="inputField">
          <input type="text" onChange={onchangefun} />
          {inputvalue}
        </div>
      </div>
    </>
  );
};

export default ForUseState;

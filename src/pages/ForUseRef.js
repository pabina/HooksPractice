//when you click onthe button automatically focus onthe input filed
import React, { useRef, useState } from "react";
import Home from "./Home";

const ForUseRef = () => {
  const [text, settext] = useState("");
  const myRef = useRef(null);
  //   const onChange = (event) => {
  //     console.log(event.target.value);
  //   };
  const fun1 = () => {
    myRef.current.focus();
  };
  const fun2 = () => {
    let mytext = myRef.current.value;
    settext(mytext);
  };
  const fun3 = () => {
    myRef.current.value = "";
    settext("");
  };
  return (
    <>
      <Home />
      <div className="container">
        <input type="text" placeholder="enter anything" ref={myRef} />
        <div className="buttons">
          <button onClick={fun1}>click me</button>
          <button onClick={fun2}>add me</button>
          <button onClick={fun3}>clear me</button>
        </div>
        <div className="text">{text}</div>
      </div>
    </>
  );
};

export default ForUseRef;

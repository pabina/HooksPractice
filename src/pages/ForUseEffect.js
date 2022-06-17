import React, { useEffect, useState } from "react";
import axios from "axios";
import "../mycss.css";
import Home from "./Home";

const ForUseEffect = () => {
  const [count, setCounter] = useState(0);
  const [apitext, setapitext] = useState("");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      let mytext = res.data[0].title;
      setapitext(mytext);
    });
  }, [count]);

  const fun1 = () => {
    setCounter(count + 1);
  };
  const fun2 = () => {
    setCounter(count - 1);
  };

  return (
    <>
      <Home />
      <div className="container">
        {count}
        <div className="buttons">
          <button onClick={fun1}>incre</button>
          <button onClick={fun2}>decre</button>
        </div>

        <div className="mytext">{apitext}</div>
      </div>
    </>
  );
};

export default ForUseEffect;

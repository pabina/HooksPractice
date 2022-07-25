import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import ForUseState from "./pages/ForUseState";
import ForUseReducer from "./pages/ForUseReducer";
import ForUseEffect from "./pages/ForUseEffect";
import ForUseRef from "./pages/ForUseRef";
import ForContext from "./pages/ForContext";
import ForuseContext from "./pages/ForuseContext";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/forUseState" element={<ForUseState />}></Route>
          <Route path="/forUseReducer" element={<ForUseReducer />}></Route>
          <Route path="/forUseEffect" element={<ForUseEffect />}></Route>
          <Route path="/forUseRef" element={<ForUseRef />}></Route>
          <Route path="/forContext" element={<ForContext/>}></Route>
          <Route path="/foruseContext" element={<ForuseContext/>}></Route>
          
        </Routes>
      </Router>
    </>
  );
};

export default App;

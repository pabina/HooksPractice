import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import ForUseState from "./pages/ForUseState";
import ForUseReducer from "./pages/ForUseReducer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/forUseState" element={<ForUseState />}></Route>
          <Route path="/forUseReducer" element={<ForUseReducer />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import ForUseState from "./pages/ForUseState";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/forUseState" element={<ForUseState />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ForUseState">
                  ForUseState
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ForUseReducer">
                  ForUseReducer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ForUseEffect">
                  ForUseEffect
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ForUseRef">
                  ForUseRef
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/forContext">
                  ForContext
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/foruseContext">
                  ForuseContext
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;

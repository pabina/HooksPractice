import React, { createContext } from 'react';
import UseContext_A from '../Components/UseContext_A.js';
import Home from './Home.js';


//use context is used to overcome the consumer problems
const FirstName=createContext();
const LastName=createContext();

const ForuseContext = () => {
  return (
    <>
    <Home/>
    <div className="container">
        <h2>this is usecontext container</h2>
    <FirstName.Provider value={"pabina"}> 
    <LastName.Provider value={"Rimal"}>
    <UseContext_A/>
    </LastName.Provider>
    </FirstName.Provider>
    </div>
    </>
  )
}

export default ForuseContext;
export {FirstName,LastName};
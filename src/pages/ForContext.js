import React, { createContext } from 'react';
import Home from './Home';
import ContextComp_A from '../Components/ContextComp_A.js';

//we have to create context first
//create provider
//create consumer at last



//created context
const Firstname=createContext();
const Lastname=createContext();

//created A is a provider to pass the value

const ForContext = () => {
  return (
    <>
    <Home/>
    <div className="container">
        <h2>this is context container</h2>
        <Firstname.Provider value={"pabina"}>
            <Lastname.Provider value={"Rimal"}>
            <ContextComp_A/>
            </Lastname.Provider>
            </Firstname.Provider>
      </div>

    </>
  )
}

export default ForContext;
export {Firstname};
export {Lastname};
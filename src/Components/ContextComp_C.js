import React from 'react';
import { Firstname, Lastname } from '../pages/ForContext.js';

//created consumer in c to consume the value

const ContextComp_C = () => {
  return (

    <Firstname.Consumer>{(fname)=>{

        return (
        <Lastname.Consumer>{(lname)=>{
         return <h4>Her name is {fname} {lname}</h4>
        }}
        
        </Lastname.Consumer>
        )
    }}</Firstname.Consumer>
   
  )
}

export default ContextComp_C
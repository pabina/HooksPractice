import React,{useContext} from 'react';
import { FirstName,LastName } from '../pages/ForuseContext.js';

const UseContext_C = () => {
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
  return (
    <div>I AM  {fname} {lname}</div>
  )
}

export default UseContext_C
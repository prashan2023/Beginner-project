import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const[count,setCount] = useState(0);
  const increment =()=>{
    setCount(count + 1)
  };
  const decrement =()=>{
    setCount(count-1)
  };

  return (
    <div className="container">
      <div>
        <h1 className="count">{count}</h1>
      </div>
      
      <div className="btn-container">
        <button onClick={decrement} className="decrement"> - </button>  
      </div>
    </div>
  )
}

export default Counter;

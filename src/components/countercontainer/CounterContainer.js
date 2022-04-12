import React, { useState } from 'react';
import Counter from '../counter/Counter'
import CounterActions from "../counteractions/CounterActions";
import "./CounterContainer.css"


function CounterContainer(){

    const [counter, setCounter] = useState(0);

    const addCount = ()=>{
        setCounter(counter+1);
    }

    const subCount = ()=>{
        if(counter>0)
           setCounter(counter-1);
    }

    return(
      <div className="container">
          <Counter counter={counter}/>
          <CounterActions addCount={addCount} subCount={subCount}/>
      </div>
    );
}

export default CounterContainer;
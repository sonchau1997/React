import { useState } from "react"

export const Counter2=({name})=>{
    const [count,setCount]=useState(0);
    const onDecrease=()=>{
        setCount(count-1);
    };
    const onIncrease=()=>{
        setCount(count+1);
    };
    return(
        <div>
            <h1>Hello {name}</h1>
            <button onClick={()=>onDecrease()}>-</button>
            <span>{count}</span>
            
            <button onClick={()=>onIncrease()}  >+</button>
        </div>
    );

};
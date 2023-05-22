import { useEffect, useState } from "react"

export const Counter2=({name})=>{
    const [count,setCount]=useState(0);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setTimeout(() => {
          setLoading(true);},1000);

    },[]);
    const onDecrease=()=>{
        setCount(count-1);
    };
    const onIncrease=()=>{
        setCount(count+1);
    };
    return(
        <div>
                {
                   !loading ?(
                        <div>Loadingggggg</div> ):(

                        <>
                            <button onClick={() => onDecrease()}>-</button>
                            <span>{count}</span>

                            <button onClick={() => onIncrease()}  >+</button>
                        </>)
                }

            </div>
    );

};
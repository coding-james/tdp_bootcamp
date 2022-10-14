import { useState } from "react";

function CounterFix(){

    const [count, setCount] = useState(0);

    const handleChange=(event)=>{
        // console.log("EVENT:", event);
        const newCount = parseInt(event.target.value);
        setCount(newCount)
    }

    return(
        <>
            <input type="number" value={count} onChange={handleChange}/>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(0)}>reset</button>
        </>
    )

}

export default CounterFix;
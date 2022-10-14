import { useState } from "react";

function CounterFix() {

    const [count, setCount] = useState(0);
    // const [history, setHistory] = useState([]);

    const handleChange = (event) => {
        // console.log("EVENT:", event);
        const newCount = parseInt(event.target.value);
        setCount(newCount)
        // setHistory(currentHistory => [...currentHistory, newCount]); //joins two arrays into a single array
    }

    let history;
    
    function RecordHist() {
        history = parseInt(count);
        console.log(history);
    };

    return (
        <>
            <input type="number" value={count} onChange={handleChange} />
            <div>
                <button onClick={() => {
                    setCount(count + 5);
                    RecordHist();
                }}>+5</button>

                <button onClick={() => {
                    setCount(count + 1);
                    RecordHist();
                }}>+1</button>

                <button onClick={() => {
                    setCount(count - 1);
                    RecordHist();
                }}>-1</button>

                <button onClick={() => {
                    setCount(count - 5);
                    RecordHist();
                }}>-5</button>

                <button onClick={() => {
                    setCount(0);
                    RecordHist();
                }}>reset</button>
            </div>

        </>
    )

}

export default CounterFix;
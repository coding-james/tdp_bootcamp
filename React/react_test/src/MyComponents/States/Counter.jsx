import { useState } from "react";

function Counter() {

    const [count, setCount] = useState();

    const handleChange = (event) => {
        setCount(event.target.value);
        // console.log(event);
    };

    const history = [];

    // const [histView, setHistView] = useState();

    function RecordHist() {
        history.push(parseInt(count));
        console.log(history);
    };

    return (
        <>
            <div>
                <input type="number" value={count} onChange={handleChange} />
                <button onClick={() => {
                    setCount(parseInt(count) + 5);
                    RecordHist();
                }}>increment 5</button>

                <button onClick={() => {
                    setCount(parseInt(count) + 1);
                    RecordHist();
                }}>increment 1</button>

                <button onClick={() => {
                    setCount(parseInt(count) - 1);
                    RecordHist();
                }}>decrement 1</button>
                
                <button onClick={() => {
                    setCount(parseInt(count) - 5);
                    RecordHist();
                }}>decrement 5</button>

                <button onClick={() => {
                    setCount(0);
                    history = [];
                }}>reset</button>
            </div>
            {/* <div>
                <input type="text" value={ history } />
            </div> */}
        </>
    )

}

export default Counter;
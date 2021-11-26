import React, { useState } from 'react';




const App = () => {

    let time = new Date().toLocaleTimeString();

    const [count, setcount] = useState(time);



    const Incnum = () => {

        setcount(new Date().toLocaleTimeString());

    }

    setInterval(
        Incnum
        , 1000);
    return (
        <>
            <h1>{count}</h1>
            {/* <button onClick={Incnum}>click me</button> */}
        </>
    )
}
export default App;
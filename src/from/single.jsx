import React, { useState } from "react";

const App = () => {

    const [name, setname] = useState(" ");
    const [fullnaem, setfull] = useState();

    const inputevent = (data) => {
        console.log(data.target.value);
        setname(data.target.value);
    }

    const orgdata = () => {
        setfull(name);
    }
    return (
        <>
            <div>
                <h1>hello{fullnaem}</h1>
                <input type="text" placeholder="Enter your name" value={name} onChange={inputevent} />
                <button onClick={orgdata}>click me</button>
            </div>
        </>
    )
}
export default App;
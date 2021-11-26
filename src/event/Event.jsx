import React, { useState } from 'react';



const App = () => {

    const purple = "red";
    const [bg, setbg] = useState(purple);

    const [promax, setname] = useState("pro");

    const bcchange = () => {
        // console.log("clicked me")
        let red = "blue";
        setbg(red);
        setname("babu pro")
    }


    const bgback = () => {
        setbg("red");
        setname("new pro")
    }
    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onClick={bcchange} onDoubleClick={bgback}>{promax}</button>
            </div>
        </>
    )
}
export default App;
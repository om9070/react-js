import React from 'react'
import { useState, useEffect } from 'react';
const App = () => {
    const [num, setnum] = useState(0);
    const [nums, setnums] = useState(0);


    // useEffect(() => {
    //     document.title = `you have clicked ${nums}`
    // })

    useEffect(() => {
        alert("i am clicked")
    }, [num])


    return (
        <>
            <h1>this is data</h1>
            <button onClick={() => { setnum(num + 1) }}>click me {num}</button>
            <button onClick={() => { setnums(nums + 1) }}>click me {nums}</button>

        </>
    )
}
export default App;
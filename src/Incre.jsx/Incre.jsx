import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Clock from "react-digital-clock";

const App = () => {
    const [num, setnum] = useState(0);


    const increment = () => {
        setnum(num + 1)
    }


    const decrement = () => {

        if (num > 0) {
            setnum(num - 1)
        } else {
            setnum(0);
            alert("sorry.you can't reached inside zero")
        }
    }


    return (
        <>
            <h1>{num}</h1>
            <button onClick={increment}><AddIcon /></button>
            <button onClick={decrement}>-</button>
            <button ><Clock /></button>

        </>
    )
}

export default App;
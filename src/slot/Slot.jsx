import React from 'react';


const Slot = (props) => {
    // let x = "😄";
    // let y = "😄";
    // let z = "😸";

    let x = props.x;
    let y = props.y;
    let z = props.z;


    if (x === y && y === z) {
        return (
            <>
                <h1>{x}{y}{z}</h1>
                <h1>this is maching</h1>
            </>
        )
    } else {
        return (
            <>
                <h1>{x}{y}{z}</h1>
                <h1>this is not machings</h1>
            </>
        )
    }
}

const App = () => {
    return (
        <>
            <h1 className="heading_style">welcome to slot machine game</h1>
            <Slot x="😄" y="😄" z="😸" />
            <Slot x="😄" y="😄" z="😃" />
            <Slot x="🍌" y="😄" z="😸" />
            <Slot x="🌹" y="🌹" z="🌹" />

        </>
    )
}

export default App;

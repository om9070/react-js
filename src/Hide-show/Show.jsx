import React from 'react'
import { useState } from 'react';

const Show = ({ question, answer }) => {
    const [show, setshow] = useState(false);
    return (
        <>
            <div>
                <h1> <span onClick={() => setshow(!show)}>{show ? "-" : "+"}</span>{question}</h1>
            </div>
            {
                show && <p>{answer}</p>
            }
        </>
    )
}

export default Show;
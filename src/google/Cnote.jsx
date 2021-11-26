import React, { useState } from "react";

const Cnote = (props) => {
    const [note, setnote] = useState({
        title: "",
        content: ""
    })

    const inputeven = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;
        const { name, value } = event.target;

        setnote((prevdata) => {
            return {
                ...prevdata,
                [name]: value,
            }
        })
    }

    const onevent = () => {
        props.passnote(note);
        setnote({
            title: "",
            content: "",
        })
    }
    return (
        <>
            <h1>this is noteapp</h1>
            <from>
                <div>
                    <input type="text" name="title" value={note.title} onChange={inputeven} placeholder="title" />
                </div>
                <textarea cols="30" rows="8" name="content" value={note.content} onChange={inputeven} placeholder="write a note"></textarea>
                <div>
                    <button onClick={onevent}>+</button>
                </div>
            </from>
        </>
    )
}
export default Cnote;
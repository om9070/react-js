import React from "react";

const Snote = (props) => {

    const deletenote = () => {
        props.deleteitem(props.id);
    }

    return (
        <>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <p>{props.content}</p>
                </div>
                <div>
                    <button onClick={deletenote}>-</button>
                </div>
            </div>
        </>
    )
}
export default Snote;
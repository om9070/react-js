import React from 'react';

const Todo = (props) => {



    return (
        <>
            <div>
                <li>
                    <button onClick={() => {
                        props.onSelect(props.id);
                    }}>-</button>
                    {props.text}</li>
            </div>
        </>)
}
export default Todo;


// const[line,setline]=usestate(false);

// function call(){
//     setline(true)
// }
// <li style={{textDecoration: line ?"line-through": "none"}}></li>


// 
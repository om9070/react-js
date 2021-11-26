import React from 'react';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cnote from './google/Cnote';
import Snote from './google/Snote';


const App = () => {
    const [additem, setitem] = useState([]);

    const addnote = (note) => {
        // alert("i am pro");
        setitem((prevd) => {
            return [...prevd, note]
        })
    }

    const ondelete = (id) => {
        setitem((olddata) =>
            olddata.filter((currdata, indx) => {
                return indx !== id;
            })
        )
    }
    return (
        <>
            <Cnote passnote={addnote} />
            <h2> show hare your notes</h2>

            {additem.map((val, index) => {
                return (
                    <Snote
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteitem={ondelete}
                    />
                )
            })}
        </>
    )
}
export default App;

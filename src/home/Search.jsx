import React, { useState } from 'react'
import Sresult from './Sresult';

const Search = () => {
    const [img, setimg] = useState("");

    const inputevent = (event) => {
        const data = event.target.value;
        console.log(data)
        setimg(data);

    }
    return (
        <>
            <h1>search is open</h1>
            <div>
                <input type="text" placeholder="enter anythings" value={img} onChange={inputevent} />
            </div>
            {
                img === "" ? null : <Sresult name={img} />
            }
        </>
    )
}
export default Search;
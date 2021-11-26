import React, { useState } from 'react'

const App = () => {

    const [data, setdata] = useState({
        fname: " ",
        lname: " ",
        number: " ",
        email: " "
    });

    const [item, setitem] = useState([]);


    const getdata = (hg) => {
        const { name, value } = hg.target;
        setdata((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const dsumit = (e) => {
        e.preventDefault();
        setitem(data)
    }
    return (
        <>
            <form onSubmit={dsumit}>
                <div>
                    <h1>this is color{item.fname}{item.lname}</h1>
                    <p>{item.number}{item.email}</p>
                </div>
                <input type="text" placeholder="enter your frist name" name="fname" value={item.fname} onChange={getdata} />
                <input type="text" placeholder="enter your second name" name="lname" value={item.lname} onChange={getdata} />
                <input type="text" placeholder="enter your third name" name="number" value={item.number} onChange={getdata} />
                <input type="text" placeholder="enter your four name" name="email" value={item.email} onChange={getdata} />

                <button type="submit"> click me</button>
            </form>
        </>
    )
}
export default App;
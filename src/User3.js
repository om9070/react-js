import { useState } from "react";
import logo from './logo.svg';
import './App.css';


function User3() {
    // const [data, updata] = useState("om prakash");
    const [data, updata] = useState(0);

    function updatedata() {
        // updata("guddu pro");
        updata(data + 1);

    }
    return (
        <div className="App">
            <h1>{data}</h1>
            <button onClick={updatedata}>update data</button>
        </div>
    )
}
export default User3;
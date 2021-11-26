import React from "react";
import { createContext } from "react";
import Cona from "./contect/Cona";

const fristname = createContext();
const lastname = createContext();


const App = () => {
    return (
        <>
            <fristname.Provider value={" op"} >
                <lastname.Provider value={" prakash"}>
                    <Cona />
                </lastname.Provider>
            </fristname.Provider>
        </>
    )
}
export default App;
export { fristname, lastname };
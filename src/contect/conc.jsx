import React from 'react'
import { fristname, lastname } from '../App';
const Conc = () => {
    return (
        <>
            <fristname.Consumer>{(fname) => {
                return (
                    <lastname.Consumer>
                        {(lname) => {
                            return (
                                <h1>this is data{fname}{lname}</h1>

                            )
                        }}
                    </lastname.Consumer>
                )
            }}</fristname.Consumer>

        </>
    )
}
export default Conc;
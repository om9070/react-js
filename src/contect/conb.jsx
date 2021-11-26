import React, { useContext } from 'react'
import Conc from './conc'
import { fristname, lastname } from '../App';


const Conb = () => {

    const fname = useContext(fristname);
    const lname = useContext(lastname);


    return (
        <>
            {/* <Conc /> */}
            <h4>my name is {fname}{lname}</h4>
        </>
    )
}
export default Conb;
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Statewise = () => {
    const [datas, setdata] = useState([]);

    const getcovid = async () => {
        const res = await fetch("https://api.covid19india.org/data.json")
        const actual = await res.json();
        console.log(actual);
        setdata(actual.Statewise);

    }

    useEffect(() => {
        getcovid();
    }, [])
    return (
        <>
            <h3 className="text-center">this is line for covid</h3>
            <div className="container-fluid mt-5">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead >
                            <tr>
                                <th>state</th>
                                <th>confirmed</th>
                                <th>recoverd</th>
                                <th>death</th>
                                <th>active</th>
                                <th>update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datas.map((currElem, ind) => {
                                    return (

                                        <tr key={ind}>
                                            <td>{currElem.state}</td>
                                            <td>{currElem.confirmed}</td>
                                            <td>recoverd</td>
                                            <td>death</td>
                                            <td>active</td>
                                            <td>update</td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Statewise;
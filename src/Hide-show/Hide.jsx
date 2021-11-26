import React from "react";
import { useState } from "react";
import { question } from "./Api";
import Show from "./Show";

const Hide = () => {
    const [data, setdata] = useState(question);
    return (
        <>
            {
                data.map((curEle) => {
                    const { id } = curEle;
                    return <Show key={id}{...curEle} />;

                })
            }
        </>
    )
}

export default Hide;
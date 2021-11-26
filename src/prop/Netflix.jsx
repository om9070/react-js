import React from 'react';
import Card from "./Props";
import Sdata from './Sdata';
function Netflix() {
    return (
        <Card
            key={Sdata[1].id}
            image={Sdata[1].image}
            tittle={Sdata[1].tittle}
            para={Sdata[1].para}
            btn={Sdata[1].btn}
        />
    )
}
export default Netflix;